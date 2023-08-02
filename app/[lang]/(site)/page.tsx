import { Metadata } from 'next';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { getPosts } from '@/sanity/schemas/post-schema/post-schema-utils';
import { getProjects } from '@/sanity/schemas/project-schema/project-schema-utils';
import TestAudio from './_components/TestAudio';
import TestPosts from './_components/TestPosts';
import TestProject from './_components/TestProject';
import TestVideo from './_components/TestVideo';

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
  const posts = await getPosts(`${lang === 'ru' ? 'ru' : 'en'}`);
  const projects = await getProjects();

  return (
    <div>
      <p>Current locale: {lang}</p>
      <TestPosts posts={posts} />
      <TestProject projects={projects} />
      <TestAudio />
      <TestVideo />
    </div>
  );
}
