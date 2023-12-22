import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react'

export type MenuButtonContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  setOpen: Dispatch<SetStateAction<boolean>>
}
