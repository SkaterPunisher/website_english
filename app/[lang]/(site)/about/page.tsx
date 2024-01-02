import AboutTitle from '@/components/shared/About/AboutTitle/AboutTitle'
import FormContactWithManagement from '@/components/shared/FormContactWithManagement/FormContactWithManagement'
import HeaderPageAbout from '@/components/shared/HeaderPageAbout/HeaderPageAbout'
import { Locale } from '@/i18n-config'
import { getAbout } from '@/sanity/schemas/teacher-schema/teacher-schema-utils'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  return {
    title: 'Зыкова Оксана § Advanced English обо мне',
    description:
      'Два высших лингвистических образования, оффлайн обучение в Лондоне - всё это - Зыкова Оксана § Advanced English',
  }
}

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const oksana = await getAbout('zykova', lang)

  console.log(oksana)

  return (
    <main>
      <HeaderPageAbout teacher={oksana} />

      <AboutTitle teacher={oksana} />

      <FormContactWithManagement
        title={'Связаться со мной'}
        subtitle={'Электронный адрес для преложений'}
        btn={'Написать'}
      />
    </main>
  )
}
