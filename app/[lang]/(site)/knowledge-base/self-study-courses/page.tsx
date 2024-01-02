import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Курсы для самостоятельного обучения Зыкова Оксана § Advanced English',
    description:
      'Описание страницы курсов для самостоятельного обучения Зыкова Оксана § Advanced English',
  }
}

export default async function SelfStudyCoursesPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return <div>Страница курсов для самостоятельного обучения</div>
}
