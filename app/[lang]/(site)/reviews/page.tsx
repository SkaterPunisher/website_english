import YandexReviews from '@/components/shared/YandexReviews/YandexReviews'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Отзывы Advenced English | Zykova Oksana',
    description: 'Описание страницы отзывов Advenced English | Zykova Oksana',
  }
}

export default async function ReviewsPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <main>
      <YandexReviews />
    </main>
  )
}
