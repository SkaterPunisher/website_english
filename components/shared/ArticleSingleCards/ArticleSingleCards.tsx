import { ArticleSingleCardsProps } from './ArticleSingleCards.props'
import styles from './ArticleSingleCards.module.scss'
import cn from 'classnames'
import { getArticlesByAnyTag } from '@/sanity/schemas/article-schema/singleArticle-schema-utils'
import Heading from '@/components/ui/Heading/Heading'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Text from '@/components/ui/Text/Text'
import { formatDate } from '@/lib/utils/convertData'
import BookIcon from '@/icons/book-open.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import HelperScroll from '../HelperScroll/HelperScroll'

async function ArticleSingleCards({ lang, tags, className, ...props }: ArticleSingleCardsProps) {
  const articles = await getArticlesByAnyTag(lang, tags)

  if (articles && articles.length > 0) {
    return (
      <section className={cn(styles.wrapper, 'layout', className)} {...props}>
        <Heading tag="h3" className={styles.heading}>
          Вас может заинтересовать
        </Heading>

        <HelperScroll
          className={cn(styles.helper, {
            [styles.two]: articles.length >= 2,
            [styles.three]: articles.length >= 3,
            [styles.four]: articles.length >= 4,
          })}
        />

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
      </section>
    )
  } else return null
}

export default ArticleSingleCards
