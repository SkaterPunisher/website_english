import styles from './AboutTitle.module.scss'
import cn from 'classnames'
import { AboutTitleProps } from './AboutTitle.props'
import GlobIcon from '@/icons/globe.svg'
import CalculatorIcon from '@/icons/calculator.svg'
import Text from '@/components/ui/Text/Text'
import AboutTitleVideo from './AboutTitleVideo/AboutTitleVideo'

const AboutTitle = ({ teacher, className, ...props }: AboutTitleProps) => {
  return (
    <section className={cn(styles.section, 'layout', className)} {...props}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <GlobIcon className={styles.icon} />
          <Text size="sl">Педагогический опыт</Text>
          <Text size="s">
            Николай Ягодкин с детства интересовался преподаванием. В возрасте 9 лет он
            самостоятельно обучил младшего брата всей программе начальной школы. Будучи студентом
            университета, Николай Ягодкин основательно занимался репетиторством, преподавал
            математику
          </Text>
        </li>
        <li className={styles.item}>
          <CalculatorIcon className={styles.icon} />
          <Text size="sl">Технологии обучения</Text>
          <Text size="s">
            Технологии работы с информацией являются авторской разработкой Николая Ягодкина. Они
            включают совокупность приемов и методов развития логического мышления за счет обучения
            теории множеств и теории классификации одновременно
          </Text>
        </li>
      </ul>

      <AboutTitleVideo teacher={teacher} />
    </section>
  )
}

export default AboutTitle
