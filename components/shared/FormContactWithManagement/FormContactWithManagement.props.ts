import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FormContactWithManagementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  title: string
  subtitle: string
  btn: string
}
