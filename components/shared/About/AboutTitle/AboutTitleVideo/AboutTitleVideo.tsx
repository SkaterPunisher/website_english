'use client'

import styles from './AboutTitleVideo.module.scss'
import { AboutTitleVideoProps } from './AboutTitleVideo.props'
import VideoPlayer from '@/components/shared/VideoPlayer/VideoPlayer'
import { useRef } from 'react'
import { useVideoPlayer } from '@/lib/hooks/useVideoPlayer'

const AboutTitleVideo = ({ teacher, className, ...props }: AboutTitleVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isPlaying, togglePlayPause } = useVideoPlayer(videoRef)

  return (
    <VideoPlayer
      className={styles.video}
      isPlaying={isPlaying}
      srcPoster={teacher.imagePreviewForVideoForCenter.url}
      srcVideo={teacher.videoForCenter?.url!}
      ref={videoRef}
      togglePlayPause={togglePlayPause}
    />
  )
}

export default AboutTitleVideo
