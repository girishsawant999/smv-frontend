import Img from 'components/common/Img';
import React from 'react';
import styles from './backButton.module.css';

type IBackButtonProps = {
	onClick: () => void;
	className: string;
};

function BackButton({ onClick, className = '' }: IBackButtonProps) {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		onClick();
	};
	return (
		<button
			className={
				styles.backbutton +
				' flex justify-center items-center focus:outline-none ' +
				className
			}
			onClick={handleClick}>
			<Img alt="back" width="auto" height="auto" srcSet={['left-arrow.svg']} />
		</button>
	);
}

export default BackButton;
