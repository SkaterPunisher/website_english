'use client'

import { ArticleInterestProps } from './ArticleInterest.props'
import styles from './ArticleInterest.module.scss'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import { formatDate } from '@/lib/utils/convertData'
import BookIcon from '@/icons/book-open.svg'
import useDragToScroll from '@/lib/hooks/useDragToScroll'

const ArticleInterest = ({ articles, className, ...props }: ArticleInterestProps) => {
  const scrollRef = useDragToScroll()

  return (
    <ul className={styles.cards} {...props} ref={scrollRef}>
      {articles.map((article, index) => (
        <li className={styles.card} key={article._id}>
          <DefaultImages
            className={styles.img}
            src={article.imageSmall.url as string}
            width={418}
            height={300}
            alt={index.toString()}
          />
          <CustomLink href={`/knowledge-base/articles/${article.slug}`}>
            <Heading tag="h3" className={styles.title}>
              {article.name}
            </Heading>
          </CustomLink>
          <Text size="s" className={styles.description}>
            {article.description}
          </Text>
          <div className={styles.info}>
            <Text className={styles.data} size="xxs">
              {formatDate(article._createdAt)}
            </Text>
            <Text className={styles.time} size="xxs">
              <BookIcon className={styles.icon} />
              {article.timeForRead} мин чтения
            </Text>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArticleInterest
