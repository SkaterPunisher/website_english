import { ArticleCardProps } from './ArticleCard.props'
import styles from './ArticleCard.module.scss'
import cn from 'classnames'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Text from '@/components/ui/Text/Text'
import { formatDate } from '@/lib/utils/convertData'
import BookIcon from '@/icons/book-open.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'

const ArticleCard = ({ article, className, ...props }: ArticleCardProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
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
              <div className={styles.icon}>
                <BookIcon />
              </div>
              {article.timeForRead} мин чтения
            </Text>
          </div>
        </div>
      </div>

      <DefaultImages
        className={styles.img}
        src={article.imageSmall.url as string}
        alt={article.imageSmall.alt}
        width={264}
        height={182}
      />
    </div>
  )
}

export default ArticleCard
