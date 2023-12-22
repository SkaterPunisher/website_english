import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Тест Advenced English | Zykova Oksana',
    description: 'Описание страницы тестa Advenced English | Zykova Oksana',
  }
}

export default async function TestPage({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}) {
  return <div>Страница теста</div>
}
