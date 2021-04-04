import React from 'react';
import Filler from './Filler';
import styles from './ProgressBar.module.css';

type IProgressBarProps = {
	percent: number;
	color: string;
};
const ProgressBar = ({ percent, color }: IProgressBarProps) => {
	return (
		<div className={styles.progressBar}>
			<Filler percent={percent} color={color} />
		</div>
	);
};
export default ProgressBar;
