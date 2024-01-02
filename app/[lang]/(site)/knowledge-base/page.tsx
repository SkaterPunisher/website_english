import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'База знаний Advenced English | Зыкова Оксана',
    description: 'Описание страницы базы знаний Advenced English | Зыкова Оксана',
  }
}

export default async function KnowledgePage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница Базы знаний</div>
}
