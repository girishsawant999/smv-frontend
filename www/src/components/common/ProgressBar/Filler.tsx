import React from 'react';
import styles from './ProgressBar.module.css';
type IFillerProps = {
	percent: number;
};
const Filler = ({ percent }: IFillerProps) => {
	return <div className={styles.filler} style={{ width: `${percent}%` }} />;
};
export default Filler;
