import { Metadata } from 'next';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { getArticle } from '@/sanity/sanity-utils';

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
  const article = await getArticle(lang);
  console.log(article);

  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>Current article: {article.title}</p>
    </div>
  );
}
