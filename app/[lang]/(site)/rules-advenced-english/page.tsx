import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Правила посещения Advenced English | Зыкова Оксана',
    description: 'Описание страницы правил посещения Advenced English | Зыкова Оксана',
  }
}

export default async function RulesPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница правил</div>
}
