import { ArticleSingleTitleProps } from './ArticleSingleTitle.props'
import styles from './ArticleSingleTitle.module.scss'
import cn from 'classnames'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import Text from '@/components/ui/Text/Text'
import { formatDate } from '@/lib/utils/convertData'
import BookIcon from '@/icons/book-open.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import Heading from '@/components/ui/Heading/Heading'

const ArticleSingleTitle = ({ article, className, ...props }: ArticleSingleTitleProps) => {
  return (
    <div className={cn(styles.wrapper, 'layout', className)} {...props}>
      <div className={styles.titleWrapper}>
        <Heading tag="h1-s" className={styles.title}>
          {article.name}
        </Heading>
        <div className={styles.infoTime}>
          <Text className={styles.data} size="xxs">
            {formatDate(article._createdAt)}
          </Text>
          <Text className={styles.time} size="xxs">
            <BookIcon className={styles.icon} />
            {article.timeForRead} мин чтения
          </Text>
        </div>
      </div>

      <DefaultImages
        className={styles.img}
        src={article.image.url as string}
        alt={article.image.alt}
        width={1300}
        height={550}
      />

      <div className={styles.editor}>
        <DefaultImages
          className={styles.imgTeacher}
          src={article.author.imageSmall as string}
          alt={article.author.imageSmall}
          width={100}
          height={100}
        />
        <div className={styles.editorInfo}>
          <CustomLink href={`/teachers/${article.author.slug}`}>
            <Text size="sl" className={styles.fio}>
              {article.author.firstname} {article.author.lastname}
            </Text>
          </CustomLink>

          <Text className={styles.description} size="s">
            {article.author.abroad}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default ArticleSingleTitle
