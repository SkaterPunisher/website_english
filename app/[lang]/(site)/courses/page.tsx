import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Программы обучения Зыкова Оксана § Advanced English',
    description: 'Описание страницы программ обучения Зыкова Оксана § Advanced English',
  }
}

export default async function CoursesPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница Программ обучения</div>
}
