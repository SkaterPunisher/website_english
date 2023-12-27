import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import { Locale } from '@/i18n-config'
import { getTeachers } from '@/sanity/schemas/teacher-schema/teacher-schema-utils'
import { Metadata } from 'next'
import Form from '@/components/shared/Form/Form'
import FAQ from '@/components/shared/FAQ/FAQ'
import { getTeacherTags } from '@/sanity/schemas/teacher-schema/teacherTags-schema/teacherTags-schema-utils'
import TeacherTags from '@/components/shared/TeacherTags/TeacherTags'
import TeacherSmallCards from '@/components/shared/TeacherSmallCards/TeacherSmallCards'
// export const revalidate = 60 * 10 // Это нужно для ревалидации запросов (1 раз в 10 минут). Но уже сделал в groq запросе последним параметром

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title:
      'Сильные преподаватели в онлайн студии английского языка Zykova Oksana § Advanced English',
    description:
      'Репетиторы и преподаватели онлайн студии английского языка Zykova Oksana § Advanced English | Сильные учителя | Скидки до 30% | Попробуйте бесплатно!',
  }
}

export default async function TeachersPage({ params: { lang } }: { params: { lang: Locale } }) {
  const teachers = await getTeachers(lang)
  const tags = await getTeacherTags(lang)

  return (
    <main>
      <HeaderPage
        color="purple"
        title="Наши преподаватели"
        description="Преподаватель — это не просто инструктор, он — ваш наставник в мире английского языка. Правильный выбор преподавателя способен полностью изменить ваш путь в освоении английского"
        btnText="Оставить заявку"
      />

      <section className="layout">
        <TeacherTags tags={tags} />

        <TeacherSmallCards teachers={teachers} />
      </section>

      <Form forTeachersPage={true} />
      <FAQ lang={lang} pageName={'Преподаватель'} />
    </main>
  )
}
