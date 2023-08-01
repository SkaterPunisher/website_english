import { Metadata } from 'next';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { getArticle } from '@/sanity/schemas/article-schema/article-schema-utils';
import {
  getPost,
  getPosts,
} from '@/sanity/schemas/post-schema/post-schema-utils';

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
  const posts = await getPost('english_for_adults', lang);
  console.log(posts);

  return (
    <div>
      <p>Current locale: {lang}</p>
      {/* <p>Current article: {article.title}</p> */}
    </div>
  );
}
