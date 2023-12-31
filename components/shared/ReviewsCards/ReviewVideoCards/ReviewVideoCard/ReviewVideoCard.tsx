import VideoPlayer from '@/components/shared/VideoPlayer/VideoPlayer'
import { useVideoPlayer } from '@/lib/hooks/useVideoPlayer'
import { useRef } from 'react'
import { ReviewVideoCardProps } from './ReviewVideoCard.props'

const ReviewVideoCard = ({ srcVideo, srcPoster, className }: ReviewVideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { isPlaying, togglePlayPause } = useVideoPlayer(videoRef)

  return (
    <VideoPlayer
      className={className}
      isPlaying={isPlaying}
      srcVideo={srcVideo}
      srcPoster={srcPoster}
      ref={videoRef}
      togglePlayPause={togglePlayPause}
    />
  )
}

export default ReviewVideoCard
