import styles from './ArticlePage.module.scss'
import cn from 'classnames'
import { ArticlePageProps } from './ArticlePage.props'
import ArticleSingleTitle from '@/components/shared/ArticleSingleTitle/ArticleSingleTitle'
import FormSubscriptionForNewsBig from '@/components/shared/FormSubscriptionForNewsBig/FormSubscriptionForNewsBig'

const ArticlePage = ({ article, className, ...props }: ArticlePageProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <ArticleSingleTitle article={article} />
      <FormSubscriptionForNewsBig />
    </div>
  )
}

export default ArticlePage
