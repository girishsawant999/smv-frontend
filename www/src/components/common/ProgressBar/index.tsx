import React from 'react';
import Filler from './Filler';
import styles from './ProgressBar.module.css';

type IProgressBarProps = {
  percent: number;
};
const ProgressBar = ({ percent }: IProgressBarProps) => {
  return (
    <div className={styles.progressBar}>
      <Filler percent={percent} />
    </div>
  );
};
export default ProgressBar;
