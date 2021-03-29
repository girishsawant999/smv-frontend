import React from 'react';
import styles from './ProgressBar.module.css';
type IFillerProps = {
	percent: number;
	color: string;
};
const Filler = ({ percent, color }: IFillerProps) => {
	return (
		<div
			className={[styles[color], styles.filler].join(' ')}
			style={{ width: `${percent}%` }}
		/>
	);
};
export default Filler;
