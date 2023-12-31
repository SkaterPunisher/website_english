import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ButtonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: React.ReactNode
  backgroundColor?: string
  color?: 'green' | 'yellow' | 'purple' | 'red' | 'blue' | 'black'
  size?: 's' | 'button' | 'xxs' | 'xs' | 'sl' | 'l' | 'll' | 'xl'
}
