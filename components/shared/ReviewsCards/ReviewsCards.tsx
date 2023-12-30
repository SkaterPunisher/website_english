import styles from './ReviewsCards.module.scss'
import cn from 'classnames'
import { ReviewsCardsProps } from './ReviewsCards.props'
import ReviewCard from './ReviewCard/ReviewCard'
import Heading from '@/components/ui/Heading/Heading'
import Button from '@/components/ui/Button/Button'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import Vector from '@/icons/vector-purple-reviews.svg'
import HelperScroll from '../HelperScroll/HelperScroll'

const ReviewsCards = ({ button, reviews, className, ...props }: ReviewsCardsProps) => {
  return (
    <section className={cn(styles.section, 'layout', className)} {...props}>
      <div className={styles.title}>
        <div className={styles.wrapperIcon}>
          <Heading tag="h2" className={styles.heading}>
            Истории успеха <br />
            наших студентов
          </Heading>
          <Vector className={styles.icon} />
        </div>

        {button ? (
          <CustomLink href={'/reviews'} className={styles.link}>
            <Button placeholder={'Смотреть все отзывы'} color="purple">
              <ArrowRightIcon style={{ width: 24 }} />
            </Button>
          </CustomLink>
        ) : null}
      </div>

      <HelperScroll className={styles.helper} />

      <div className={styles.wrapper}>
        {reviews[0].videos.map(url => (
          <ReviewCard
            key={url._key}
            src={url.assetUrl!}
            className={styles.video}
            srcPoster={url.preview}
          />
        ))}
      </div>
    </section>
  )
}

export default ReviewsCards
