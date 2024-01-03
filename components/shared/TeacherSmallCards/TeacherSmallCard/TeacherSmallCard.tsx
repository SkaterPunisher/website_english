'use client'

import { TeacherSmallCardProps } from './TeacherSmallCard.props'
import styles from './TeacherSmallCard.module.scss'
import cn from 'classnames'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import { useRef } from 'react'
import { useVideoPlayer } from '@/lib/hooks/useVideoPlayer'
import Container from '@/components/ui/Container/Container'
import HomeIcon from '@/icons/home.svg'
import EducationIcon from '@/icons/education.svg'
import CertificateIcon from '@/icons/certificate.svg'
import VideoPlayer from '@/components/shared/VideoPlayer/VideoPlayer'
import Btn from '@/components/ui/Btn/Btn'
import Button from '@/components/ui/Button/Button'
import ArrowRightIcon from '@/icons/arrow-right.svg'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import { useApplicationStore } from '@/stores/application.store'
import AnimatedCounter from '@/components/ui/AnimatedCounter/AnimatedCounter'
import dayjs from 'dayjs'
import AudioPlayer from '@/components/ui/AudioPlayer/AudioPlayer'
import { levelEnglish } from '@/constants/levelEnglish'
import { usePathname } from 'next/navigation'

const TeacherSmallCard = ({
  teacher,
  forSingleTeacher,
  className,
  ...props
}: TeacherSmallCardProps) => {
  const pathName = usePathname()
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isPlaying, togglePlayPause } = useVideoPlayer(videoRef)

  const { toggleApplicationForm } = useApplicationStore()

  // Получаем данные о датах и учениках
  const currentDate = dayjs()
  const startDate = dayjs(teacher.startEducation)
  const fullYears = currentDate.diff(startDate, 'year')
  const fullMonths = currentDate.diff(startDate, 'month')
  const lessonCount = fullMonths * 160 + Math.floor(Math.random() * 10)
  const studentCount = fullYears * 110 + Math.floor(Math.random() * 10)

  return (
    <div className={cn(styles.wrapper, forSingleTeacher && styles.single, className)} {...props}>
      <VideoPlayer
        isPlaying={isPlaying}
        srcPoster={teacher.image.url}
        srcVideo={teacher.video.url}
        ref={videoRef}
        togglePlayPause={togglePlayPause}
      />

      <Container size="m" className={styles.content}>
        <div className={styles.title}>
          <Heading tag="h4">{teacher.firstname}</Heading>
          <Text size="ll">от {teacher.price} ₽ за урок</Text>
        </div>

        <Text size="s">{teacher.about}</Text>

        <ul className={styles.list}>
          <li className={styles.item}>
            <CertificateIcon className={styles.icon} />
            <Text size="s">{teacher.certificate.join(', ')}</Text>
          </li>
          <li className={styles.item}>
            <EducationIcon className={styles.icon} />
            <Text size="s">
              Подтвержденный уровень английского языка:{' '}
              {teacher.level.map(level => level.level).join(', ')}
            </Text>
          </li>
          <li className={styles.item}>
            <HomeIcon className={styles.icon} />
            <Text size="s">{teacher.abroad}</Text>
          </li>
        </ul>

        {forSingleTeacher && (
          <>
            <ul className={styles.experience}>
              <li className={styles.item}>
                <Heading tag="h3">
                  <AnimatedCounter from={0} to={fullYears} />
                </Heading>
                <Text size="s">лет опыта</Text>
              </li>
              <li>
                <Heading tag="h4">
                  <AnimatedCounter from={0} to={studentCount} />
                </Heading>
                <Text size="s">довольных учеников</Text>
              </li>
              <li>
                <Heading tag="h4">
                  <AnimatedCounter from={0} to={lessonCount} />
                </Heading>
                <Text size="s">уроков проведено</Text>
              </li>
            </ul>

            <div className={styles.about}>
              <Heading tag="h3">О себе</Heading>
              <AudioPlayer audio={teacher.audio.url} />
            </div>

            <div className={styles.levelWrapper}>
              <Heading tag="h3">Уврони</Heading>
              <ul className={styles.level}>
                {teacher.level.map(level => (
                  <li key={level._id} className={styles.item}>
                    <Heading tag="h3">{level.level}</Heading>
                    <Text size="xxs">{levelEnglish[level.level]}</Text>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.teachWrapper}>
              <Heading tag="h3">Преподает</Heading>
              <ul className={styles.teachList}>
                {teacher.teaches.map(teach => (
                  <li key={teach._id} className={styles.teachItem}>
                    <Text size="s">{teach.name}</Text>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.interestWrapper}>
              <Heading tag="h3">Интересы</Heading>
              <ul className={styles.interestList}>
                {teacher.interests.map((interest, index) => (
                  <li key={index} className={styles.interestItem}>
                    <Text size="s">{interest}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {!forSingleTeacher && (
          <div className={styles.buttons}>
            <Btn
              onClick={() => {
                toggleApplicationForm(pathName)
              }}
              className={styles.btn}
            >
              Записаться
            </Btn>
            <CustomLink href={`/teachers/${teacher.slug}`}>
              <Button placeholder={'Подробнее'} color="purple">
                <ArrowRightIcon style={{ width: 24 }} />
              </Button>
            </CustomLink>
          </div>
        )}
      </Container>
    </div>
  )
}

export default TeacherSmallCard
