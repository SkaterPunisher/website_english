import { Locale } from '@/i18n-config'
import '@/styles/global.scss'
import MainLayout from '@/components/shared/MainLayout/MainLayout'
import FormApplication from '@/components/shared/FormApplication/FormApplication'

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
        <MainLayout lang={params.lang}>{children}</MainLayout>
        <FormApplication />
      </body>
    </html>
  )
}
