import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { CostType } from '../Cost'

export type CostTypesProps = {
  type: CostType
  setType: Dispatch<SetStateAction<CostType>>
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
