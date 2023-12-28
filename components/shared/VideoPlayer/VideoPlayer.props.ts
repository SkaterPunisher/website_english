import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type VideoPlayerProps = {
  isPlaying: boolean
  srcPoster?: string
  srcVideo: string
  togglePlayPause: () => void
} & DetailedHTMLProps<InputHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
