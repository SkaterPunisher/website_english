import { FAQProps } from './FAQ.props'
import cn from 'classnames'
import styles from './FAQ.module.scss'
import { getFaqs } from '@/sanity/schemas/faq-schema/faq-schema-utils'

export default async function FAQ({ lang, pageName, className, ...props }: FAQProps) {
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
