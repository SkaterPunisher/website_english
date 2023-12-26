import { ArticleSingleCardsProps } from './ArticleSingleCards.props'
import styles from './ArticleSingleCards.module.scss'
import cn from 'classnames'
import { getArticlesByAnyTag } from '@/sanity/schemas/article-schema/singleArticle-schema-utils'
import Heading from '@/components/ui/Heading/Heading'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Text from '@/components/ui/Text/Text'
import { formatDate } from '@/lib/utils/convertData'
import BookIcon from '@/icons/book-open.svg'

async function ArticleSingleCards({ lang, tags, className, ...props }: ArticleSingleCardsProps) {
  const articles = await getArticlesByAnyTag(lang, tags)

  if (articles && articles.length > 0) {
    return (
      <section className={cn(styles.wrapper, 'layout', className)} {...props}>
        <Heading tag="h3" className={styles.heading}>
          Вас может заинтересовать
        </Heading>
        <ul className={styles.cards}>
          {articles.map((article, index) => (
            <li className={styles.card} key={article._id}>
              <DefaultImages
                className={styles.img}
                src={article.imageSmall.url as string}
                width={418}
                height={300}
                alt={index.toString()}
              />
              <Heading tag="h3" className={styles.title}>
                {article.name}
              </Heading>
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
      </section>
    )
  } else return null
}

export default ArticleSingleCards
