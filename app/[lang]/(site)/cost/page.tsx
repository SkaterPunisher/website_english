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
    title:
      'Стоимость уроков английского языка онлайн/оффлайн от 350 рублей ‹ Advenced English | Zykova Oksana',
    description:
      'Стоимость занятий английским языком онлайн ⠀➤ Сильные преподаватели ⠀➤ Скидки до 30% ☑️Попробуйте бесплатно! Advenced English | Zykova Oksana',
  }
}

export default async function CostPage({ params: { lang } }: { params: { lang: Locale } }) {
  const courses = await getCourses(lang)

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
