import styles from './ArticlesPages.module.scss'
import cn from 'classnames'
import { ArticlesPagesProps } from './ArticlesPages.props'
import ArticleNewCard from '@/components/shared/ArticleNewCard/ArticleNewCard'
import FormSubscriptionForNews from '@/components/shared/FormSubscriptionForNews/FormSubscriptionForNews'
import Heading from '@/components/ui/Heading/Heading'
import ArticleCard from '@/components/shared/ArticleCard/ArticleCard'

const ArticlesPages = ({ articles, className, ...props }: ArticlesPagesProps) => {
  return (
    <div className={cn(styles.wrapper, 'layout', className)} {...props}>
      <section className={styles.new}>
        <ArticleNewCard article={articles[0]} />
        <FormSubscriptionForNews />
      </section>

      {articles.length > 1 && (
        <section className={styles.articlesWrapper}>
          <Heading tag="h3" className={styles.title}>
            Все статьи
          </Heading>

          <div className={styles.articles}>
            {articles?.map((article, index) => {
              if (index > 0) return <ArticleCard article={article} key={article.slug} />
            })}
          </div>

          <div className={styles.tags}>123</div>
        </section>
      )}
    </div>
  )
}

export default ArticlesPages
