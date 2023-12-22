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
  return <div>Страница FAQ</div>
}
