import { clientConfig } from '@/config/client-config';
import { Locale } from '@/i18n-config';
import { createClient, groq } from 'next-sanity';

export const getArticle = async (lang: Locale): Promise<{ title: string }> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "article"][0] {
      "title": title[$lang]
  }`,
    { lang }
  );
