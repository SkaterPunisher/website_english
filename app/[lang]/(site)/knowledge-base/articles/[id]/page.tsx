import { getArticle } from '@/sanity/schemas/article-schema/singleArticle-schema-utils'
import type { Metadata } from 'next'
import { Locale } from '@/i18n-config'
import ArticlePage from '@/components/pages/ArticlePage/ArticlePage'
import ButtonBack from '@/components/ui/ButtonBack/ButtonBack'

export async function generateMetadata({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}): Promise<Metadata> {
  const article = await getArticle(id, lang)

  return {
    title: `${article.name} < Zykova Oksana § Advanced English`,
    description: `${article.description} | Блог Zykova Oksana § Advanced English`,
  }
}

export default async function ArticleSinglePage({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}) {
  const singleArticle = await getArticle(id, lang)

  return (
    <main>
      <ButtonBack href={`/knowledge-base/articles`}>Все статьи</ButtonBack>
      <ArticlePage article={singleArticle} lang={lang} />
    </main>
  )
}
