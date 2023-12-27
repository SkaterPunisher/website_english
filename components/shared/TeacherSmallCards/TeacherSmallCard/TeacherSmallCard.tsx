'use client'

import { TeacherSmallCardProps } from './TeacherSmallCard.props'
import styles from './TeacherSmallCard.module.scss'
import cn from 'classnames'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import { useRef } from 'react'
import { useVideoPlayer } from '@/lib/hooks/useVideoPlayer'
import PlayIcon from '@/icons/play.svg'
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
import { useTeacherTagsStore } from '@/stores/teacherTags'

const TeacherSmallCard = ({ teacher, className, ...props }: TeacherSmallCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isPlaying, togglePlayPause } = useVideoPlayer(videoRef)

  const { toggleApplicationForm } = useApplicationStore()

  const { tag } = useTeacherTagsStore()

  return (
    <div className={cn(styles.wrapper, className)} {...props} key={teacher._id}>
      <div className={styles.videoWrapper}>
        <VideoPlayer
          isPlaying={isPlaying}
          srcPoster={teacher.image.url}
          srcVideo={teacher.video.url}
          ref={videoRef}
        />

        {!isPlaying && (
          <div className={styles.playIcon} onClick={togglePlayPause}>
            <PlayIcon />
          </div>
        )}
      </div>

      <Container size="m" className={styles.content}>
        <div className={styles.title}>
          <Heading tag="h4">{teacher.lastname}</Heading>
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

        <div className={styles.buttons}>
          <Btn
            onClick={() => {
              toggleApplicationForm()
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
      </Container>
    </div>
  )
}

export default TeacherSmallCard
