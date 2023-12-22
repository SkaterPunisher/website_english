import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Политика конфиденциальности Advenced English | Zykova Oksana',
    description: 'Описание страницы политики конфиденциальности Advenced English | Zykova Oksana',
  }
}

export default async function PrivacyPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница политики конфиденциальности</div>
}
