import { ForwardedRef, forwardRef } from 'react'
import { VideoPlayerProps } from './VideoPlayer.props'
import styles from './VideoPlayer.module.scss'

const VideoPlayer = forwardRef(
  (
    { isPlaying, srcPoster, srcVideo, className, ...props }: VideoPlayerProps,
    ref: ForwardedRef<HTMLVideoElement>,
  ) => {
    return (
      <video className={styles.video} controls={isPlaying} poster={srcPoster} ref={ref} {...props}>
        <source src={srcVideo} type="video/mp4" />
      </video>
    )
  },
)

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer
