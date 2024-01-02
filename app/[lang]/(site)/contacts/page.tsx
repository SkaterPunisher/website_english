import Contacts from '@/components/shared/Contacts/Contacts'
import FormContactWithManagement from '@/components/shared/FormContactWithManagement/FormContactWithManagement'
import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import TelegramSupport from '@/components/shared/TelegramSupport/TelegramSupport'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Контакты онлайн студии английского языка Зыкова Оксана § Advanced English',
    description: 'Телефон: +7 (950) 625-34-46.⠀ 🕘⠀С 10:00 до 19:00 по будням',
  }
}

export default async function ContactsPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <main>
      <HeaderPage
        color="yellow"
        title="Адреса и контакты"
        description="Работаем ежедневно с 9:00 до 20:00 по московскому времени, уроки проводим круглосуточно. Свяжитесь с нами любым удобным способом!"
      />

      <section className="layout">
        <Contacts />
      </section>

      <FormContactWithManagement
        title={'Связь с руководством'}
        subtitle={'Любые интересующие вопросы и предложения'}
        btn={'Написать директору'}
      />

      <TelegramSupport />
    </main>
  )
}
