'use client';

import React from 'react';
import ReactPlayer from 'react-player';
import styles from './TestVideo.module.scss';

const TestVideo = () => {
  return (
    <ReactPlayer
      className={styles.video}
      url='https://youtube.com/shorts/qT7Ab70U4zk?feature=share'
    />
  );
};

export default TestVideo;
