import styles from './YandexReviews.module.scss'
import cn from 'classnames'

const YandexReviews = () => {
  return (
    <section className="layout">
      <div className={styles.wrapper}>
        <iframe
          className={styles.map}
          src="https://yandex.ru/maps-reviews-widget/1615779020?comments"
        ></iframe>
        <a
          href="https://yandex.ru/maps/org/english_school/1615779020/"
          target="_blank"
          className={styles.link}
        >
          English school — Яндекс Карты
        </a>
      </div>
    </section>
  )
}

export default YandexReviews
