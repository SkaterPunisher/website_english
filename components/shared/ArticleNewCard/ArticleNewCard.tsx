import { ArticleNewCardProps } from './ArticleNewCard.props'
import styles from './ArticleNewCard.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Container from '@/components/ui/Container/Container'
import Heading from '@/components/ui/Heading/Heading'
import { formatDate } from '@/lib/utils/convertData'
import Text from '@/components/ui/Text/Text'
import BookIcon from '@/icons/book-open.svg'

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
      <Container size="s" className={styles.content}>
        <Heading tag="h3">{article.name}</Heading>
        <div className={styles.info}>
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
      </Container>
    </div>
  ) : null
}

export default ArticleNewCard
