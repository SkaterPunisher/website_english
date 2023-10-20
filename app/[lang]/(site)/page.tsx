import { Metadata } from 'next'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import TestAudio from './_components/TestAudio'
import TestVideo from './_components/TestVideo'
import { getTests } from '@/sanity/schemas/test-schema/test-schema-utils'
import { getTeachers } from '@/sanity/schemas/teacher-schema/teacher-schema-utils'
import FAQ from '@/ui/FAQ/FAQ'
import { getFaqs } from '@/sanity/schemas/faq-schema/faq-schema-utils'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang)

  return {
    title: dictionary.MainPage.MainPageTitle,
    description: dictionary.MainPage.MainPageDescription,
  }
}

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  // const posts = await getPosts(`${lang === 'ru' ? 'ru' : 'en'}`);
  const tests = await getTests()
  const faq = await getFaqs('main', lang)

  // const teachers = await getTeachers()

  return (
    <section>
      <p>Current locale: {lang}</p>
      <TestAudio />
      <FAQ lang={lang} faq={faq} />
      {/* <TestVideo /> */}

      {/* <div className='border-y-2  border-gray-500 my-4 p-2'>
        {tests[0].questions.map((q) => (
          <>
            <Image src={tests[0].image} width={500} height={500} alt='' />
            <div key={q._id}>{q.type}</div>
            <div key={q._id}>{q.description}</div>
            <div key={q._id}>{q.task}</div>
            <div key={q._id}>{q.explanation}</div>
          </>
        ))}
      </div> */}
    </section>
  )
}
