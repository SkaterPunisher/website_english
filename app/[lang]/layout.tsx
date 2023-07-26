import { Locale, i18n } from '@/i18n-config';
import MainProvider from './_components/MainProvider';
import '@/assets/global.scss';
import { getDictionary } from '@/get-dictionary';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <MainProvider dictionary={dictionary.MainLayout}>
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
