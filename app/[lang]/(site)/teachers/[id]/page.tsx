import type { Metadata } from 'next'
import { Locale } from '@/i18n-config'
import { getTeacher } from '@/sanity/schemas/teacher-schema/teacher-schema-utils'
import ButtonBack from '@/components/ui/ButtonBack/ButtonBack'
import TeacherSmallCard from '@/components/shared/TeacherSmallCards/TeacherSmallCard/TeacherSmallCard'
import Form from '@/components/shared/Form/Form'
import FAQ from '@/components/shared/FAQ/FAQ'

export async function generateMetadata({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}): Promise<Metadata> {
  const teacher = await getTeacher(id, lang)

  return {
    title: `${teacher.firstname} ${teacher.lastname} Зыкова Оксана § Advanced English`,
    description: `Лучший преподаватель по английскому языку только в онлайн студии Зыкова Оксана § Advanced English это ${teacher.firstname} ${teacher.lastname}`,
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
      <ButtonBack href={`/teachers`}>Все преподаватели</ButtonBack>

      <section className="layout">
        <TeacherSmallCard teacher={singleTeacher} forSingleTeacher={true} />
      </section>

      <Form
        forTeachersPage={true}
        page={`Преподаватель ${singleTeacher.firstname}${singleTeacher.lastname}`}
      />
      <FAQ lang={lang} pageName={'Преподаватель'} />
    </main>
  )
}
