import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export type VideoPlayerProps = {
  isPlaying: boolean
  srcPoster: string
  srcVideo: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
