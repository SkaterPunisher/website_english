import FAQ from '@/components/shared/FAQ/FAQ'
import Form from '@/components/shared/Form/Form'
import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Вопрос-ответ Advenced English | Zykova Oksana',
    description: 'Описание страницы вопрос-ответ Advenced English | Zykova Oksana',
  }
}

export default async function FAQPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <main>
      <HeaderPage
        color="yellow"
        title="Вопрос-ответ"
        description="На этой странице вы можете посмотреть ответы на самые частые вопросы и ответы на них от наших преподавателей"
      />

      <FAQ lang={lang} pageName={'Главная'} allFAQ={true} />
      <Form />
    </main>
  )
}
