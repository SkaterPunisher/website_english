'use client'

import { ArticlesCardProps } from './ArticlesCard.props'
import styles from './ArticlesCard.module.scss'
import cn from 'classnames'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Text from '@/components/ui/Text/Text'
import { formatDate } from '@/lib/utils/convertData'
import BookIcon from '@/icons/book-open.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import { useTagsStore } from '@/stores/tags.store'
import { Article } from '@/sanity/schemas/article-schema/singleArticleTypes'
import { motion } from 'framer-motion'

const listVariants = {
  initial: { opacity: 0, x: -10 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
}

const ArticlesCard = ({ articles, className, ...props }: ArticlesCardProps) => {
  const { tags: allTags } = useTagsStore()

  const filterArticlesByTags = (article: Article) => {
    // Если список тегов пуст, возвращаем все статьи
    if (allTags.length === 0) return true

    // Проверяем, есть ли пересечение между тегами статьи и выбранными тегами
    return article.tags.some(articleTag => allTags.includes(articleTag.tag))
    // return allTags.every(tag => article.tags.some(articleTag => articleTag.tag === tag))
  }

  return (
    <motion.div
      className={className}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={listVariants}
    >
      {articles?.filter(filterArticlesByTags).map(article => (
        <motion.div
          className={cn(styles.wrapper)}
          key={article.slug}
          variants={listVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className={styles.content}>
            <CustomLink href={`/knowledge-base/articles/${article.slug}`}>
              <Text size="l" className={styles.title}>
                {article.name}
              </Text>
            </CustomLink>

            <div className={styles.info}>
              <Text size="s" className={styles.desc}>
                {article.description}
              </Text>
              <div className={styles.infoTime}>
                <Text className={styles.data} size="xxs">
                  {formatDate(article._createdAt)}
                </Text>
                <Text className={styles.time} size="xxs">
                  {/* <div className={styles.icon}> */}
                  <BookIcon className={styles.icon} />
                  {/* </div> */}
                  {article.timeForRead} мин чтения
                </Text>
              </div>
            </div>
          </div>

          <DefaultImages
            className={styles.img}
            src={article.imageSmall.url as string}
            alt={article.imageSmall.alt}
            width={800}
            height={250}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ArticlesCard
