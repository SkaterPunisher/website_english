import { getSingleArticle } from '@/sanity/schemas/blog-schema/singleArticle-schema-utils'
import type { Metadata } from 'next'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await getSingleArticle(params.id)

  return {
    title: article.name,
    description: article.description,
  }
}

export default async function SingleArticle({ params }: { params: { id: string } }) {
  const singleArticle = await getSingleArticle(params.id)

  console.log(singleArticle)

  return (
    <main>
      <Link className="text-blue-500" href="/articles">
        Все статьи
      </Link>
      <div key={singleArticle._id} className="border-y-2  border-gray-500 my-4 p-2">
        <p>Заголовок: {singleArticle.name}</p>
        <p>Slug: {singleArticle.slug}</p>
        <p>Дата: {singleArticle.date}</p>
        <p>Время на прочтение: {singleArticle.timeForRead}</p>
        <div className="flex">
          Главное изображение
          {singleArticle.image.url && (
            <Image
              src={singleArticle.image.url}
              width={200}
              height={200}
              alt={singleArticle.image.alt}
            />
          )}
        </div>
        <div className="flex">
          Превью изображение
          {singleArticle.imageSmall.url && (
            <Image
              src={singleArticle.imageSmall.url}
              width={200}
              height={200}
              alt={singleArticle.imageSmall.alt}
            />
          )}
        </div>
        <p>
          Автор: {singleArticle.author.firstname} {singleArticle.author.lastname}
        </p>
        <p>Оригинал: {singleArticle.original}</p>
        <p>
          Теги:{' '}
          {singleArticle.tags.map(t => (
            <span key={t._id} className="text-blue-500">
              {t.tag}{' '}
            </span>
          ))}
        </p>

        <div className="border-2 border-grey-500">
          {singleArticle.content.map(p => {
            if (p.children[0].text.includes('http')) {
              return <Image src={p.children[0].text} width={200} height={200} alt="" />
            } else {
              return <PortableText value={p} />
            }
          })}
        </div>
      </div>
    </main>
  )
}
