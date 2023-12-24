import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Locale } from '@/i18n-config'
import { FAQ } from './faqTypes'

export const getFaqs = async (page: string, lang: Locale): Promise<FAQ> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "faq" && namePage->page == $page][0] {
      _id,
      _createdAt,
      title,
      "namePage": namePage->{page},
      faqs
    }`,
    { page, lang },
  )
