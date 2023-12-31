import Cost from '@/components/shared/Cost/Cost'
import FAQ from '@/components/shared/FAQ/FAQ'
import HeaderPage from '@/components/shared/HeaderPage/HeaderPage'
import HelperScroll from '@/components/ui/HelperScroll/HelperScroll'
import { Locale } from '@/i18n-config'
import { getCourses } from '@/sanity/schemas/courses-schema/courses-schema-utils'
import { getPriceByTitle, getPrices } from '@/sanity/schemas/price-schema/price-schema-utils'
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
  // const prices = await getPrices(lang)
  // const defaultPrice = await getPriceByTitle('Дошкольники 4-7 лет', lang)
  // console.log('prices', prices)
  // console.log('Дошкольники 4-7 лет', defaultPrice)
  const courses = await getCourses(lang)
  console.log('courses', courses)

  return (
    <main>
      <HeaderPage
        color="yellow"
        title="Прозрачная оплата"
        description="Наши цены отражают нашу приверженность предоставлению высококачественного образования, мы стремимся обеспечить вас индивидуальным вниманием и интерактивными методами обучения, чтобы вы достигли ваших целей в изучении английского языка"
        btnText="Оставить заявку"
      />

      {courses && courses.length > 0 && <Cost lang={lang} courses={courses} />}

      <FAQ lang={lang} pageName={'Стоимость'} />
    </main>
  )
}
