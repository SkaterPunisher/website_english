'use client'

import { useRef } from 'react'
import VideoPlayer from '../../VideoPlayer/VideoPlayer'
import { useVideoPlayer } from '@/lib/hooks/useVideoPlayer'
import { ReviewCardProps } from './ReviewCard.props'

const ReviewCard = ({ src, srcPoster, className }: ReviewCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isPlaying, togglePlayPause } = useVideoPlayer(videoRef)

  return (
    <VideoPlayer
      className={className}
      isPlaying={isPlaying}
      srcVideo={src}
      srcPoster={srcPoster}
      ref={videoRef}
      togglePlayPause={togglePlayPause}
    />
  )
}

export default ReviewCard
