import { Locale } from '@/i18n-config'
import { getTeachers } from '@/sanity/schemas/teacher-schema/teacher-schema-utils'
import { Metadata } from 'next'
import Link from 'next/link'
// export const revalidate = 60 * 10 // Это нужно для ревалидации запросов (1 раз в 10 минут). Но уже сделал в groq запросе последним параметром

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Сильные репетиторы в онлайн школе Зыкова Оксана | Advanced English',

    description:
      'Репетиторы и преподаватели онлайн-школы английского языка Зыковой Оксаны | Сильные учителя | Скидки до 30% | Попробуйте бесплатно!',
  }
}

export default async function TeachersPage({ params: { lang } }: { params: { lang: Locale } }) {
  const teachers = await getTeachers(lang)

  return (
    <div className="p-6">
      <Link className="text-blue-500" href="/">
        На главную
      </Link>

      {teachers.map((teacher, index) => (
        <div className="flex " key={teacher._id}>
          <p>{index + 1}: </p>
          <Link href={`/teachers/${teacher.slug}`}>
            {teacher.lastname} {teacher.firstname}
          </Link>
        </div>
      ))}
    </div>
  )
}
