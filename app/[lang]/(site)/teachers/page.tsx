import { Locale } from '@/i18n-config'
import { getTeachers } from '@/sanity/schemas/teacher-schema/teacher-schema-utils'
import { Metadata } from 'next'
import Link from 'next/link'

const description = {
  ru: 'Репетиторы и преподаватели онлайн-школы английского языка Зыковой Оксаны | Сильные учителя | Скидки до 30% | Попробуйте бесплатно!',
  en: `Tutors and teachers of Oksana's Online English Language School | Strong Teachers | Discounts up to 30% | Try it for free!`,
}
const title = {
  ru: 'Сильные репетиторы в онлайн школе Зыкова Оксана | Advance English',
  en: 'Strong tutors at Oksana Zykova online School | Advance English',
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: title[lang],
    description: description[lang],
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
