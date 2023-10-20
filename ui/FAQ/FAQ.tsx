import { FAQProps } from './FAQ.props'
import cn from 'classnames'
import styles from './FAQ.module.scss'

export default function FAQ({ faq, className, ...props }: FAQProps) {
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
