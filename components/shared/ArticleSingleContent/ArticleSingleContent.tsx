import { ArticleSingleContentProps } from './ArticleSingleContent.props'
import styles from './ArticleSingleContent.module.scss'
import cn from 'classnames'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import { PortableText } from '@portabletext/react'
import SocialLinksShare from '@/components/ui/SocialLinksShare/SocialLinksShare'
import FormDiscount from '../FormDiscount/FormDiscount'

const ArticleSingleContent = ({ article, className, ...props }: ArticleSingleContentProps) => {
  return (
    <section className={cn(styles.wrapper, 'layout', className)} {...props}>
      <div className={styles.content}>
        {article.content.map(p => {
          if (p.children[0].text.includes('http')) {
            return (
              <DefaultImages
                className={styles.img}
                src={p.children[0].text}
                width={768}
                height={323}
                alt="Изображение в статье"
              />
            )
          } else {
            return <PortableText value={p} />
          }
        })}
        <SocialLinksShare />
      </div>

      <div>
        <FormDiscount className={styles.formDiscount} />
      </div>
    </section>
  )
}

export default ArticleSingleContent
