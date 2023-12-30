import { clientConfig } from '@/config/client-config'
import { createClient, groq } from 'next-sanity'
import { Courses } from './coursesTypes'
import { Locale } from '@/i18n-config'

export const getCourses = async (lang: Locale): Promise<Courses[]> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "courses"] | order(_createdAt desc){
      _id,
      _createdAt,
      title,
      description,
      "price": price->{
        _id,
        _createdAt,
        title,
        single,
        pair,
        mini,
        group
      },
    }`,
    { lang },
    { next: { revalidate: 60 * 10 } },
  )

export const getCoursesByTitle = async (title: string, lang: Locale): Promise<Courses> =>
  createClient(clientConfig).fetch(
    groq`*[_type == "courses" && title == $title] | order(_createdAt desc) {
      _id,
      _createdAt,
      description,
      "price": price->{
        _id,
        _createdAt,
        title,
        single,
        pair,
        mini,
        group
      },
    }`,
    { title, lang },
  )
