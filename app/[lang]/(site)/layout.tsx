import { Locale } from '@/i18n-config'
import '@/styles/global.scss'
import MainLayout from '@/components/shared/MainLayout/MainLayout'
import { ToastContainer } from 'react-toastify'
import FormModal from '@/components/shared/FormModal/FormModal'

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
        <ToastContainer hideProgressBar />
        <MainLayout lang={params.lang}>{children}</MainLayout>
        <FormModal />
      </body>
    </html>
  )
}
