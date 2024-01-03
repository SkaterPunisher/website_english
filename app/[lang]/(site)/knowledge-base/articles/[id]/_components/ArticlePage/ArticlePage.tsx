import styles from './ArticlePage.module.scss'
import cn from 'classnames'
import { ArticlePageProps } from './ArticlePage.props'
import ArticleSingleTitle from '@/components/shared/ArticleSingleTitle/ArticleSingleTitle'
import FormSubscriptionForNewsBig from '@/components/shared/FormSubscriptionForNewsBig/FormSubscriptionForNewsBig'
import ArticleSingleContent from '@/components/shared/ArticleSingleContent/ArticleSingleContent'
import Form from '@/components/shared/Form/Form'
import FAQ from '@/components/shared/FAQ/FAQ'
import ArticleSingleCards from '@/components/shared/ArticleSingleCards/ArticleSingleCards'

const ArticlePage = ({ lang, article, className, ...props }: ArticlePageProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <ArticleSingleTitle article={article} />
      <FormSubscriptionForNewsBig />
      <ArticleSingleContent article={article} />
      <Form page={`Статья ${article.name}`} />
      <ArticleSingleCards lang={lang} tags={article.tags.map(tag => tag.tag)} />
      <FAQ lang={lang} pageName={'Статья'} />
    </div>
  )
}

export default ArticlePage
