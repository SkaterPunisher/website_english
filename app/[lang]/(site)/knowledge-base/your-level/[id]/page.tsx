import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Тест Зыкова Оксана § Advanced English',
    description: 'Описание страницы тестa Зыкова Оксана § Advanced English',
  }
}

export default async function TestPage({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}) {
  return <div>Страница теста</div>
}
