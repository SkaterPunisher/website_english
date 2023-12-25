import { ButtonBackProps } from './ButtonBack.props'
import cn from 'classnames'
import styles from './ButtonBack.module.scss'
import Text from '@/components/ui/Text/Text'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import ArrowIcon from '@/icons/arrow-right.svg'

const ButtonBack = ({ href, children, className, ...props }: ButtonBackProps) => {
  return (
    <div className={styles.wrapper}>
      <CustomLink href={href} className={styles.link}>
        <button className={cn(styles.button, className)} {...props}>
          <ArrowIcon className={styles.icon} />
          <Text size="s" className={styles.text}>
            {children}
          </Text>
        </button>
      </CustomLink>
    </div>
  )
}

export default ButtonBack
