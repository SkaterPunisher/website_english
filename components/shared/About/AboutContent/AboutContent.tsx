import styles from './AboutContent.module.scss'
import cn from 'classnames'
import { AboutContentProps } from './AboutContent.props'
import Text from '@/components/ui/Text/Text'
import dayjs from 'dayjs'
import SwiperImages from '@/components/shared/SwiperImages/SwiperImages'

const AboutContent = ({ teacher, className, ...props }: AboutContentProps) => {
  const currentDate = dayjs()
  const startDate = dayjs(teacher.startEducation)
  const fullYears = currentDate.diff(startDate, 'year')
  const businessExperience = fullYears - 2
  const studentCount = fullYears * 110 + Math.floor(Math.random() * 10)

  return (
    <section className={cn(styles.section, 'layout', className)} {...props}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Text size="s">
            Николай Ягодкин применяет технологии мнемоники (мнемотехники), используя авторскую
            интерпретацию общеизвестных методов. При создании методики Николай Ягодкин принимал к
            сведению все, что мог узнать об эффективном обучении, опирался в том числе и на
            международный опыт
          </Text>
          <div className={styles.listWrapper}>
            <Text className={styles.title} size="ll">
              Факты обо мне
            </Text>

            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.icon}></div>
                <Text size="s">Два высших образования в сфере международных отношений</Text>
              </li>
              <li className={styles.item}>
                <div className={styles.icon}></div>
                <Text size="s">
                  Международные сертификаты FCE, TKT module 1, TKT module 2, TKT module 3
                </Text>
              </li>
              <li className={styles.item}>
                <div className={styles.icon}></div>
                <Text size="s">Прошла очное обучение в одном из языковых центров Лондона</Text>
              </li>
              <li className={styles.item}>
                <div className={styles.icon}></div>
                <Text size="s">{fullYears + 3} лет опыта в английском языке</Text>
              </li>
              <li className={styles.item}>
                <div className={styles.icon}></div>
                <Text size="s">
                  {businessExperience} лет преподавания в студии английского языка
                </Text>
              </li>
              <li className={styles.item}>
                <div className={styles.icon}></div>
                <Text size="s">
                  Помогла в изучении английского языка {studentCount}+ студентов в студии
                </Text>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.image}>
          <SwiperImages images={teacher.imagesForAboutPages} />
        </div>
      </div>
    </section>
  )
}

export default AboutContent
