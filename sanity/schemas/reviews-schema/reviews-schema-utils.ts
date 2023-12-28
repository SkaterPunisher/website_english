import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Locale } from '@/i18n-config'
import { Reviews } from './reviewsTypes'

export const getReviews = async (lang: Locale): Promise<Reviews> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "reviews"]{
      _id,
      _createdAt,
      videos[] {
        _key,
        "url": url.current,
        "assetUrl": asset->url
      }
    }`,
    { lang },
    { next: { revalidate: 60 * 10 } },
  )
