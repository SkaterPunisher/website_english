'use client';

import React, { useRef, useState } from 'react';

const TestAudio = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src='https://storage.yandexcloud.net/english-website/Website%20English/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D1%8C.m4a'
      ></audio>
      <button onClick={playing ? handlePause : handlePlay}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </>
  );
};

export default TestAudio;
