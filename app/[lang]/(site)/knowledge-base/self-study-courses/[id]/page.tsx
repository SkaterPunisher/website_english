import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Курс для самостоятельного обучения Зыкова Оксана § Advanced English',
    description:
      'Описание страницы курса для самостоятельного обучения Зыкова Оксана § Advanced English',
  }
}

export default async function SelfStudyCoursePage({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale }
}) {
  return <div>Страница курса для самостоятельного обучения</div>
}
