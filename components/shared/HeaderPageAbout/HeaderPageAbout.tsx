import styles from './HeaderPageAbout.module.scss'
import cn from 'classnames'
import { HeaderPageAboutProps } from './HeaderPageAbout.props'
import VectorPurple from '@/icons/vector-purple-about.svg'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks'
import dayjs from 'dayjs'
import AnimatedCounter from '@/components/ui/AnimatedCounter/AnimatedCounter'

const HeaderPageAbout = ({ teacher, className, ...props }: HeaderPageAboutProps) => {
  const currentDate = dayjs()
  const startDate = dayjs(teacher.startEducation)
  const fullYears = currentDate.diff(startDate, 'year')
  const businessExperience = fullYears - 2
  const studentCount = fullYears * 110 + Math.floor(Math.random() * 10)

  return (
    <section className={cn(styles.wrapper, styles.purple, className)} {...props}>
      <div className={cn(styles.contentWrapper, 'layout')}>
        <div className={styles.content}>
          <Heading tag="h1">Оксана Зыкова</Heading>
          <Text size="s" className={styles.description}>
            Николай Ягодкин применяет технологии мнемоники (мнемотехники), используя авторскую
            интерпретацию общеизвестных методов. При создании методики Николай Ягодкин принимал к
            сведению все, что мог узнать об эффективном обучении, опирался в том числе и на
            международный опыт.
          </Text>
          <SocialLinks className={styles.links} />

          <ul className={styles.list}>
            <li className={styles.item}>
              <Heading tag="h3">
                <AnimatedCounter from={0} to={fullYears} /> лет
              </Heading>
              <Text size="s">Опыт работы преподавателем</Text>
            </li>
            <li className={styles.item}>
              <Heading tag="h3">
                <AnimatedCounter from={0} to={businessExperience} /> лет
              </Heading>
              <Text size="s">На рынке языковых курсов</Text>
            </li>
            <li className={styles.item}>
              <Heading tag="h3">
                <AnimatedCounter from={0} to={studentCount} />
              </Heading>
              <Text size="s">Студентов прошли обучение</Text>
            </li>
          </ul>
        </div>

        <div className={styles.imgWrapper}>
          <DefaultImages
            className={styles.img}
            src={teacher.imageAbout.url}
            width={640}
            height={720}
            alt={'Оксана Зыкова'}
          />
        </div>

        <div className={cn(styles.icon, styles.iconPurple)}>
          <VectorPurple />
        </div>
      </div>
    </section>
  )
}

export default HeaderPageAbout
