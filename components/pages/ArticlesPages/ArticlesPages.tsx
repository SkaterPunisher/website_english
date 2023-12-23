import styles from './ArticlesPages.module.scss'
import cn from 'classnames'
import { ArticlesPagesProps } from './ArticlesPages.props'
import ArticleNewCard from '@/components/shared/ArticleNewCard/ArticleNewCard'
import FormSubscriptionForNews from '@/components/shared/FormSubscriptionForNews/FormSubscriptionForNews'

const ArticlesPages = ({ articles, className, ...props }: ArticlesPagesProps) => {
  return (
    <div className={cn(styles.wrapper, 'layout', className)} {...props}>
      <section className={styles.new}>
        <ArticleNewCard article={articles[0]} />
        <FormSubscriptionForNews />
      </section>
    </div>
  )
}

export default ArticlesPages
