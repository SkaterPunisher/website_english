import { getArticles } from '@/sanity/schemas/blog-schema/singleArticle-schema-utils'
import { Metadata } from 'next'

import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Блог`,
    description: 'Различные статьи по английскому языку для изучения иностранного языка',
  }
}

export default async function CreateAwardPage() {
  const articles = await getArticles()
  console.log(articles)

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
