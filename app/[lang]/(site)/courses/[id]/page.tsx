import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Программы обучения Advenced English | Зыкова Оксана',
    description: 'Описание страницы программ обучения Advenced English | Зыкова Оксана',
  }
}

export default async function CoursePage({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}) {
  return <div>Страница Программы обучения</div>
}
