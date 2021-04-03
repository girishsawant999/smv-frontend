import React from 'react';
import Icon from 'components/common/Icon';

type IFloatingButtonProps = {
	src: string;
	srcSet?: string;
	alt: string;
	iconHeight?: number;
	onClick?: () => void;
	text?:
		| React.ReactChild
		| React.ReactChildren
		| React.ReactChild[]
		| React.ReactChildren[];
};
const FloatingButton = ({
	alt,
	src,
	text,
	iconHeight,
	onClick,
	srcSet
}: IFloatingButtonProps) => {
	return (
		<div className="absolute top-10 left-5 md:left-0 flex">
			<button
				className="z-10 w-10 h-10 bg-white flex justify-center items-center bg-opacity-40 md:bg-gray-200 rounded-2xl p-3 cursor-pointer"
				onClick={onClick}>
				<Icon src={src} srcSet={srcSet} alt={alt} height={iconHeight} />
			</button>
			<div className="hidden md:block md:ml-5 md:flex md:justify-center md:items-center">
				{text}
			</div>
		</div>
	);
};
export default FloatingButton;
