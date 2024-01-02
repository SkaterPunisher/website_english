import Cart from '@/components/shared/Cart/Cart'
import { Locale } from '@/i18n-config'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Моя корзина Зыкова Оксана § Advanced English',
    description:
      'Скидки 10% всем новым студентам студии английского языка Зыкова Оксана § Advanced English',
  }
}

export default async function CartPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <main>
      <Cart />
    </main>
  )
}
