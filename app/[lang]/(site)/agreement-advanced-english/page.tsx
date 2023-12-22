import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Пользовательское соглашение Advenced English | Zykova Oksana',
    description: 'Описание страницы Пользовательское соглашение Advenced English | Zykova Oksana',
  }
}

export default async function ContractPage({ params: { lang } }: { params: { lang: Locale } }) {
  return <div>Страница пользовательское соглашение</div>
}
