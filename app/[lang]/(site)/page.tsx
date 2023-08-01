import { Metadata } from 'next';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { getArticle } from '@/sanity/schemas/article-schema/article-schema-utils';
import {
  getPost,
  getPosts,
} from '@/sanity/schemas/post-schema/post-schema-utils';
import Link from 'next/link';
import Image from 'next/image';

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

  return (
    <div>
      <p>Current locale: {lang}</p>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post) => (
          <Link
            href={`/project/${post.slug}`}
            className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
            key={post._id}
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              {post.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
