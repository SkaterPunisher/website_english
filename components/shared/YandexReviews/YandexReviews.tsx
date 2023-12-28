import Heading from '@/components/ui/Heading/Heading'
import styles from './YandexReviews.module.scss'
import cn from 'classnames'
import Vector from '@/icons/vector-faq.svg'

const YandexReviews = () => {
  return (
    <section className={cn(styles.section, 'layout')}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.header}>
            <Heading tag="h3" className={styles.heading}>
              Отзывы о нас на Яндекс Картах
            </Heading>
            <div className={styles.icon}>
              <Vector />
            </div>
          </div>
        </div>

        <div className={styles.reviewsWrapper}>
          <iframe
            className={styles.map}
            src="https://yandex.ru/maps-reviews-widget/1615779020?comments"
          ></iframe>
          <a
            href="https://yandex.ru/maps/org/english_school/1615779020/"
            target="_blank"
            className={styles.link}
          >
            Больше отзывов на Яндекс Картах
          </a>
        </div>
      </div>
    </section>
  )
}

export default YandexReviews
