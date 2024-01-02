import { Metadata } from 'next'
import { Locale } from '@/i18n-config'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Зыкова Оксана § Advanced English',
    description:
      'Онлайн-школа английского языка «Зыкова Оксана § Advanced English»⠀➤ Профессиональные преподаватели английского языка⠀➤ Доступные цены и скидки на курсы до 40% ☑️Бесплатный первый урок!',
  }
}

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <section>
      <p>Current locale: {lang}</p>
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
