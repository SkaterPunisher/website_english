import FAQ from '@/components/shared/FAQ/FAQ'
import Form from '@/components/shared/Form/Form'
import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Ответы на популярные вопросы про обучение в студии Zykova Oksana § Advanced English',
    description:
      'Здесь вы сможете узнать ответы на самые популярные вопросы о обучении в студии английского языка  Zykova Oksana § Advanced English',
  }
}

export default async function FAQPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <main>
      <HeaderPage
        color="purple"
        title="Вопрос-ответ"
        description="На этой странице вы можете посмотреть ответы на самые частые вопросы и ответы на них от наших преподавателей"
      />

      <FAQ lang={lang} pageName={'Тест'} allFAQ={true} />
      <Form />
    </main>
  )
}
