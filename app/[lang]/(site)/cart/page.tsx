import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Корзина Advenced English | Zykova Oksana',
    description: 'Описание страницы корзины Advenced English | Zykova Oksana',
  }
}

export default async function CartPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница корзины</div>
}