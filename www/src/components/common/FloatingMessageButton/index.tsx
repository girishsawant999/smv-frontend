import React from 'react';
import Icon from 'components/common/Icon';
import styles from './FloatingMessageButton.module.css';

type IFloatingMessageButtonProps = {
	className?: string;
	position?: string;
	variant: string;
};

const FloatingMessageButton = ({
	className = '',
	variant,
	position = 'bottom-5'
}: IFloatingMessageButtonProps) => {
	return (
		<div
			className={'fixed flex flex-col w-full md:w-auto mx-auto md:mx-0 px-5 md:px-0 '.concat(
				position
			)}>
			<button
				className={className
					.concat(
						' flex bg-#1A181B p-6 w-17.5 h-17.5 rounded-30px text-white cursor-pointer relative '
					)
					.concat(styles[variant])}>
				<span>
					<Icon
						src={'chat@3x.png'}
						alt="compass_icon _image"
						className="w-5 h-5"
					/>
				</span>
			</button>
		</div>
	);
};
export default FloatingMessageButton;
