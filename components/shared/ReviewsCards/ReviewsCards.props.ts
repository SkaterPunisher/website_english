import { Reviews } from '@/sanity/schemas/reviews-schema/reviewsTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ReviewsCardsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  reviews: Reviews
  button?: boolean
}
