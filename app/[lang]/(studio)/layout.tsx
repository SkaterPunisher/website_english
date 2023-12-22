import '@/styles/global.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Панель администратора',
  description:
    'Панель администратора для добавления, редактирования контента на Advanced English || Zykova Oksana',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
