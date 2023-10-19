import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '@/i18n-config'
import { getTeacher } from '@/sanity/schemas/teacher-schema/teacher-schema-utils'

export async function generateMetadata({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}): Promise<Metadata> {
  const teacher = await getTeacher(id, lang)

  return {
    title: `${teacher.firstname} ${teacher.lastname}`,
    description: `Лучший репетитор по английскому языку только в онлайн школе Зыковой Оксаны | Advance English это ${teacher.firstname} ${teacher.lastname}`,
  }
}

export default async function TeacherPage({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}) {
  const singleTeacher = await getTeacher(id, lang)

  return (
    <main>
      <Link className="text-blue-500" href="/teachers">
        Все преподаватели
      </Link>
      <p>Фамилия: {singleTeacher.lastname}</p>
      <p>Имя: {singleTeacher.firstname}</p>
      <p>Отчество: {singleTeacher.patronymic}</p>
      <div className="flex">
        Превью изображение
        {singleTeacher.imageSmall.url && (
          <Image
            src={singleTeacher.imageSmall.url}
            width={200}
            height={200}
            alt={singleTeacher.imageSmall.alt}
          />
        )}
      </div>
      <p>Обо мне: {singleTeacher.about}</p>
      <p className="text-red-500">Ссылка на видео: {singleTeacher.video}</p>
      <div className="flex">
        Главное изображение
        {singleTeacher.imageSmall.url && (
          <Image
            src={singleTeacher.image.url}
            width={200}
            height={200}
            alt={singleTeacher.image.alt}
          />
        )}
      </div>
      <p>
        Сертификаты:{' '}
        {singleTeacher.certificate.map(t => (
          <span key={t} className="text-blue-500">
            {t}{' '}
          </span>
        ))}
      </p>
      <p>Стоимость: {singleTeacher.price}</p>
      <p>Заграница: {singleTeacher.abroad}</p>
      <p>Начало стажа: {singleTeacher.startEducation}</p>
      <p className="text-red-500">Ссылка на аудио: {singleTeacher.audio}</p>
      <p>
        Интересы:{' '}
        {singleTeacher.interests.map(i => (
          <span key={i} className="text-blue-500">
            {i}{' '}
          </span>
        ))}
      </p>
      <p>
        Что преподает:{' '}
        {singleTeacher.teaches.map(t => (
          <span key={t._id} className="text-blue-500">
            {t.name}{' '}
          </span>
        ))}
      </p>
      <p>
        Уровни:{' '}
        {singleTeacher.level.map(l => (
          <span key={l._id} className="text-blue-500">
            {l.level}{' '}
          </span>
        ))}
      </p>
      {/* <div key={singleArticle._id} className="border-y-2  border-gray-500 my-4 p-2">
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
      </div> */}
    </main>
  )
}
