import { Locale, i18n } from '@/i18n-config'
import '@/styles/global.scss'
import MainLayout from '@/components/shared/MainLayout/MainLayout'

// export async function generateStaticParams() {
//   return i18n.locales.map(locale => ({ lang: locale }))
// }

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }]
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
