import { FAQProps } from './FAQ.props'
import cn from 'classnames'
import styles from './FAQ.module.scss'
import { getFaqs } from '@/sanity/schemas/faq-schema/faq-schema-utils'
import Heading from '@/components/ui/Heading/Heading'
import Vector from '@/icons/vector-faq.svg'
import Text from '@/components/ui/Text/Text'
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks'
import FAQCard from './FAQCard/FAQCard'

export default async function FAQ({ lang, pageName, className, ...props }: FAQProps) {
  const faq = await getFaqs(pageName, lang)

  if (faq && faq.faqs.length > 0) {
    return (
      <section className={cn(styles.section, 'layout', className)} {...props}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <div className={styles.header}>
              <Heading tag="h3" className={styles.heading}>
                Часто задаваемые вопросы студентов
              </Heading>
              <div className={styles.icon}>
                <Vector />
              </div>
            </div>

            <div className={styles.footer}>
              <Text size="ll" className={styles.text}>
                Не нашли ответа на свой вопрос? Напишите нам в соцсетях
              </Text>
              <SocialLinks className={styles.social} />
            </div>
          </div>

          <ul className={styles.faq}>
            {faq.faqs.map(faq => (
              <FAQCard key={faq._id} faq={faq} className={styles.card} />
            ))}
          </ul>
        </div>
      </section>
    )
  } else return null
}
