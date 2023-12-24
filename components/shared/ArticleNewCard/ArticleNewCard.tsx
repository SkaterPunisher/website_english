import { ArticleNewCardProps } from './ArticleNewCard.props'
import styles from './ArticleNewCard.module.scss'
import cn from 'classnames'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Container from '@/components/ui/Container/Container'
import Heading from '@/components/ui/Heading/Heading'
import { formatDate } from '@/lib/utils/convertData'
import Text from '@/components/ui/Text/Text'
import BookIcon from '@/icons/book-open.svg'
import SparkleIcon from '@/icons/sparkle.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'

const ArticleNewCard = ({ article, className, ...props }: ArticleNewCardProps) => {
  return article ? (
    <div className={cn(styles.wrapper, className)} {...props}>
      <DefaultImages
        className={styles.img}
        src={article.imageSmall.url as string}
        alt={article.imageSmall.alt}
        width={770}
        height={465}
      />

      <div className={styles.new}>
        <div className={styles.icon}>
          <SparkleIcon />
        </div>
        <Text size="s">Новая статья</Text>
      </div>

      <Container size="s" className={styles.content}>
        <CustomLink href={`/knowledge-base/articles/${article.slug}`}>
          <Heading tag="h3" className={styles.title}>
            {article.name}
          </Heading>
        </CustomLink>

        <div className={styles.info}>
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
      </Container>
    </div>
  ) : null
}

export default ArticleNewCard
