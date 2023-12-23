'use client'

import styles from './HeaderPage.module.scss'
import cn from 'classnames'
import { HeaderPageProps } from './HeaderPage.props'
import VectorYellow from '@/icons/vector-yellow.svg'
import VectorBlue from '@/icons/vector-blue.svg'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import Btn from '@/components/ui/Btn/Btn'
import { useApplicationStore } from '@/stores/application.store'

const HeaderPage = ({
  color = 'blue',
  title,
  description,
  btnText,
  className,
  ...props
}: HeaderPageProps) => {
  const { toggleApplicationForm } = useApplicationStore()

  return (
    <div className={cn(styles.wrapper, styles[color], className)} {...props}>
      <div className={cn(styles.contentWrapper, 'layout')}>
        <div className={styles.content}>
          <Heading tag="h1">{title}</Heading>
          <Text size="s">{description}</Text>
          <Btn color="black" onClick={toggleApplicationForm}>
            {btnText}
          </Btn>
        </div>

        {color === 'yellow' && (
          <div className={cn(styles.icon, styles.iconYellow)}>
            <VectorYellow />
          </div>
        )}
        {color === 'blue' && (
          <div className={cn(styles.icon, styles.iconBlue)}>
            <VectorBlue />
          </div>
        )}
        {/* {color === 'purple' && (
          <div className={cn(styles.icon, styles.iconYellow)}>
            <VectorArticles />
          </div>
        )}
        {color === 'red' && (
          <div className={cn(styles.icon, styles.iconYellow)}>
            <VectorArticles />
          </div>
        )} */}
      </div>
    </div>
  )
}

export default HeaderPage