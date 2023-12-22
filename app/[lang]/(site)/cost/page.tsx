import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Стоимость Advenced English | Zykova Oksana',
    description: 'Описание страницы стоимости Advenced English | Zykova Oksana',
  }
}

export default async function CostPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница стоимости</div>
}
