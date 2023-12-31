import { Reviews } from '@/sanity/schemas/reviews-schema/reviewsTypes'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ReviewVideoCardsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  reviews: Reviews
}
