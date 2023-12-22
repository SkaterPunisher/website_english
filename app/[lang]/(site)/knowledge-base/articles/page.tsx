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
    title: 'Статьи и советы для изучающих английский язык в Advance English',
    description:
      'Тут Вы можете найти статьи на интересующие Вас темы. Подтянуть свои знания. Просто расслабиться и почитать интересные материалы.',
  }
}

export default async function ArticlesPage({ params: { lang } }: { params: { lang: Locale } }) {
  const articles = await getArticles(lang)

  return (
    <div className="p-6">
      <Link className="text-blue-500" href="/">
        На главную
      </Link>

      {articles.map((article, index) => (
        <div className="flex " key={article._id}>
          <p>{index + 1}: </p>
          <Link href={`/articles/${article.slug}`}>{article.name}</Link>
        </div>
      ))}
    </div>
  )
}
