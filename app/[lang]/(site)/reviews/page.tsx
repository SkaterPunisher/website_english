import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import ReviewsCards from '@/components/shared/ReviewsCards/ReviewsCards'
import YandexReviews from '@/components/shared/YandexReviews/YandexReviews'
import { Locale } from '@/i18n-config'
import { getReviews } from '@/sanity/schemas/reviews-schema/reviews-schema-utils'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title:
      'Стоит ли учить английский в онлайн студии, отзывы наших учеников ‹ Инглекс Зыкова Оксана § Advanced English',
    description:
      'Отзывы об онлайн студии английского Зыкова Оксана § Advanced English⠀➤ Сильные преподаватели Скидки до 30% ☑️Попробуйте бесплатно! ',
  }
}

export default async function ReviewsPage({ params: { lang } }: { params: { lang: Locale } }) {
  const reviews = await getReviews(lang)

  return (
    <main>
      <HeaderPage
        color="purple"
        title="Отзывы"
        description="На этой странице вы можете посмотреть отзывы наших клиентов"
      />

      <ReviewsCards reviews={reviews} />

      <YandexReviews />
    </main>
  )
}
