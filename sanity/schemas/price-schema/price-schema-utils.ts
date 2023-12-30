import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Price } from './priceTypes'
import { Locale } from '@/i18n-config'

export const getPrices = async (lang: Locale): Promise<Price[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "price"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      single,
      pair,
      mini,
      group
    }`,
    { lang },
    { next: { revalidate: 60 * 10 } },
  )

export const getPriceByTitle = async (title: string, lang: Locale): Promise<Price> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "price" && title == $title] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      single,
      pair,
      mini,
      group
    }`,
    { title, lang },
  )
