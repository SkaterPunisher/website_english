import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type BtnProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children?: React.ReactNode
  size?: 'xs' | 's'
  color?: 'black' | 'white'
  disabled?: boolean
}
