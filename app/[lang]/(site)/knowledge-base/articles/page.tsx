import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import { Locale } from '@/i18n-config'
import { getArticles } from '@/sanity/schemas/article-schema/singleArticle-schema-utils'
import { Metadata } from 'next'
import Link from 'next/link'
// export const revalidate = 60 * 10 // Это нужно для ревалидации запросов (1 раз в 10 минут). Но уже сделал в groq запросе последним параметром

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Статьи и советы для изучающих английский язык с Zykova Oksana § Advanced English',
    description:
      'Тут Вы можете найти статьи на интересующие Вас темы. Подтянуть свои знания. Просто расслабиться и почитать интересные материалы.',
  }
}

export default async function ArticlesPage({ params: { lang } }: { params: { lang: Locale } }) {
  const articles = await getArticles(lang)

  return (
    <main>
      <HeaderPage
        color="yellow"
        btnText="Оставить заявку"
        title="Блог Advanced English"
        description="Все статьи нашего блога написаны нашими преподавателями и разивают темы, которые мы проходим на курсах. Изучите их подробнее, чтобы узнать новые темы английского языка"
      />

      <div className="p-6">
        {articles?.map((article, index) => (
          <div className="flex " key={article.slug}>
            <p>{index + 1}: </p>
            <Link href={`/knowledge-base/articles/${article.slug}`}>{article.name}</Link>
          </div>
        ))}
      </div>
    </main>
  )
}
