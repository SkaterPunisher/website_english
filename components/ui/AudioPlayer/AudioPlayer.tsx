import React, { useState, useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import styles from './AudioPlayer.module.scss'
import PlayIcon from '@/icons/play.svg'
import PauseIcon from '@/icons/pause.svg'

const AudioPlayer = ({ audio }: { audio: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const waveSurferRef = useRef<WaveSurfer>()
  const [isPlaying, toggleIsPlaying] = useState(false)

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current!,
      barWidth: 4,
      barHeight: 1,
      cursorWidth: 0,
      waveColor: '#DBDBDB', // Example wave color
      progressColor: '#BD5AF9', // Example progress color
      //   cursorColor: '#FFFFFF', // Example cursor color
      barRadius: 2, // Example for rounded corners (if supported)
      height: 70,
    })
    waveSurfer.load(audio)
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer
    })

    return () => {
      waveSurfer.destroy()
    }
  }, [audio])

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => {
          waveSurferRef.current?.playPause()
          toggleIsPlaying(!isPlaying)
        }}
        type="button"
      >
        {isPlaying ? <PauseIcon className={styles.icon} /> : <PlayIcon className={styles.icon} />}
      </button>
      <div ref={containerRef} />
    </div>
  )
}

export default AudioPlayer
