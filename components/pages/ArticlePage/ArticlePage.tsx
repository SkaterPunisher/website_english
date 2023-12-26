import styles from './ArticlePage.module.scss'
import cn from 'classnames'
import { ArticlePageProps } from './ArticlePage.props'
import ArticleSingleTitle from '@/components/shared/ArticleSingleTitle/ArticleSingleTitle'
import FormSubscriptionForNewsBig from '@/components/shared/FormSubscriptionForNewsBig/FormSubscriptionForNewsBig'
import ArticleSingleContent from '@/components/shared/ArticleSingleContent/ArticleSingleContent'
import Form from '@/components/shared/Form/Form'

const ArticlePage = ({ article, className, ...props }: ArticlePageProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <ArticleSingleTitle article={article} />
      <FormSubscriptionForNewsBig />
      <ArticleSingleContent article={article} />
      <Form />
    </div>
  )
}

export default ArticlePage
