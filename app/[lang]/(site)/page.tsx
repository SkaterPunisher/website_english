import { Metadata } from 'next'
import { Locale } from '@/i18n-config'
import FAQ from '@/components/shared/FAQ/FAQ'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Zykova Oksana § Advanced English',
    description:
      'Онлайн-школа английского языка «Zykova Oksana § Advanced English»⠀➤ Профессиональные преподаватели английского языка⠀➤ Доступные цены и скидки на курсы до 40% ☑️Бесплатный первый урок!',
  }
}

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <section>
      <p>Current locale: {lang}</p>

      <FAQ lang={lang} pageName={'about'} />
    </section>
  )
}

{
  /* <FAQ lang={lang} faq={faq} /> */
}
{
  /* <TestAudio /> */
}
{
  /* <TestVideo /> */
}
{
  /* <div className='border-y-2  border-gray-500 my-4 p-2'>
        {tests[0].questions.map((q) => (
          <>
            <Image src={tests[0].image} width={500} height={500} alt='' />
            <div key={q._id}>{q.type}</div>
            <div key={q._id}>{q.description}</div>
            <div key={q._id}>{q.task}</div>
            <div key={q._id}>{q.explanation}</div>
          </>
        ))}
      </div> */
}
