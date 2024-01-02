import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Обо мне Advenced English | Зыкова Оксана',
    description: 'Описание страницы обо мне Advenced English | Зыкова Оксана',
  }
}

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница обо мне</div>
}
