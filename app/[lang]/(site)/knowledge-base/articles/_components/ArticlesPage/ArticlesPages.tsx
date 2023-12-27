import styles from './ArticlesPages.module.scss'
import cn from 'classnames'
import { ArticlesPagesProps } from './ArticlesPages.props'
import ArticleNewCard from '@/components/shared/ArticlesNewCard/ArticlesNewCard'
import FormSubscriptionForNews from '@/components/shared/FormSubscriptionForNews/FormSubscriptionForNews'
import Heading from '@/components/ui/Heading/Heading'
import ArticleTags from '@/components/shared/ArticleTags/ArticleTags'
import ArticlesCard from '@/components/shared/ArticlesCard/ArticlesCard'

const ArticlesPages = ({ tags, articles, className, ...props }: ArticlesPagesProps) => {
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

          <ArticlesCard className={styles.articles} articles={articles} />

          <ArticleTags tags={tags} className={styles.tags} />
        </section>
      )}
    </div>
  )
}

export default ArticlesPages
