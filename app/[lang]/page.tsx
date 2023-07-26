import { Metadata } from 'next';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.MainPage.MainPageTitle,
    description: dictionary.MainPage.MainPageDescription,
  };
}

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{' '}
        {dictionary['server-component'].welcome}
      </p>
    </div>
  );
}
