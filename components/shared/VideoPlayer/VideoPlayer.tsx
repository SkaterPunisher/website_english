import { ForwardedRef, forwardRef } from 'react'
import { VideoPlayerProps } from './VideoPlayer.props'
import styles from './VideoPlayer.module.scss'
import PlayIcon from '@/icons/play.svg'

const VideoPlayer = forwardRef(
  (
    { isPlaying, srcPoster, togglePlayPause, srcVideo, className, ...props }: VideoPlayerProps,
    ref: ForwardedRef<HTMLVideoElement>,
  ) => {
    return (
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          controls={isPlaying}
          poster={srcPoster}
          ref={ref}
          {...props}
        >
          <source src={srcVideo} type="video/mp4" />
        </video>

        {!isPlaying && (
          <div className={styles.playIcon} onClick={togglePlayPause}>
            <PlayIcon />
          </div>
        )}
      </div>
    )
  },
)

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer
