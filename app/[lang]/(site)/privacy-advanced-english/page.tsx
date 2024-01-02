import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Политика конфиденциальности Зыкова Оксана § Advanced English',
    description: 'Описание страницы политики конфиденциальности Зыкова Оксана § Advanced English',
  }
}

export default async function PrivacyPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница политики конфиденциальности</div>
}
