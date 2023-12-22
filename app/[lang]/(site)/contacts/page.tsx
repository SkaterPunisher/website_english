import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Контакты Advenced English | Zykova Oksana',
    description: 'Описание страницы контактов Advenced English | Zykova Oksana',
  }
}

export default async function ContactsPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница контактов</div>
}
