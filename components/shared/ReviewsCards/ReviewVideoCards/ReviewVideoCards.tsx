'use client'

import { ReviewVideoCardsProps } from './ReviewVideoCards.props'
import styles from './ReviewVideoCards.module.scss'
import useDragToScroll from '@/lib/hooks/useDragToScroll'
import ReviewVideoCard from './ReviewVideoCard/ReviewVideoCard'

const ReviewVideoCards = ({ reviews, className, ...props }: ReviewVideoCardsProps) => {
  const scrollRef = useDragToScroll()

  return (
    <ul className={styles.wrapper} {...props} ref={scrollRef}>
      {reviews[0].videos.map(url => (
        <li key={url._key}>
          <ReviewVideoCard
            srcVideo={url.assetUrl!}
            srcPoster={url.preview}
            className={styles.video}
          />
        </li>
      ))}
    </ul>
  )
}

export default ReviewVideoCards
