import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type BasketButtonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  count?: number
}
