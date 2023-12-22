import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Тесты Advenced English | Zykova Oksana',
    description: 'Описание страницы тестов Advenced English | Zykova Oksana',
  }
}

export default async function TestsPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница тестов</div>
}
