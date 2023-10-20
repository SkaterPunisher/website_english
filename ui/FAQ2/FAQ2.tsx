import { FAQ2Props } from './FAQ2.props'
import cn from 'classnames'
import styles from './FAQ2.module.scss'
import { getFaqs } from '@/sanity/schemas/faq-schema/faq-schema-utils'

export default async function FAQ2({ lang, pageName, className, ...props }: FAQ2Props) {
  const faq = await getFaqs(pageName, lang)

  return (
    <section className={cn(styles.wrapper, className)} {...props}>
      <p>Название: {faq.namePage.page}</p>
      <ul>
        {faq.faqs.map(faq => (
          <li key={faq._id}>
            Вопрос: {faq.question} и Ответ: {faq.answer}
          </li>
        ))}
      </ul>
    </section>
  )
}
