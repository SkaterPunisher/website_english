import { useEffect, useState } from 'react'

export const useVideoPlayer = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    const videoElement = videoRef.current
    videoElement!.addEventListener('play', handlePlay)
    videoElement!.addEventListener('pause', handlePause)

    return () => {
      videoElement!.removeEventListener('play', handlePlay)
      videoElement!.removeEventListener('pause', handlePause)
    }
  }, [videoRef])

  const togglePlayPause = () => {
    const videoElement = videoRef.current
    if (isPlaying) {
      videoElement!.pause()
    } else {
      videoElement!.play()
    }
  }

  return { isPlaying, togglePlayPause }
}
