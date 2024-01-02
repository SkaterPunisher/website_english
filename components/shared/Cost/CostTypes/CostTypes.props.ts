import { CostType } from '@/types/CostType'
import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react'

export type CostTypesProps = {
  type: CostType
  setType: Dispatch<SetStateAction<CostType>>
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
