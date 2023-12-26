import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Locale } from '@/i18n-config'
import { FAQ, FAQs } from './faqTypes'

export const getFaqs = async (page: string, lang: Locale): Promise<FAQs> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "faq" && ($page == 'all' || namePage->page == $page)] {
    _id,
    _createdAt,
    title,
    "namePage": namePage->{page},
    faqs
  }`,
    { page, lang },
  )
