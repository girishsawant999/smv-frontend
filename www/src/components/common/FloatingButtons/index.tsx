import React from 'react';
import Icon from 'components/common/Icon';

type IFloatingButtonProps = {
	src: string;
	srcSet?: string;
	alt: string;
};
const FloatingButton = ({ alt, src, srcSet }: IFloatingButtonProps) => {
	return (
		<button className="z-10 absolute w-10 h-10 bg-white flex top-10 left-5 justify-center items-center bg-opacity-40 rounded-2xl p-3 cursor-pointer">
			<Icon src={src} srcSet={srcSet} alt={alt} />
		</button>
	);
};
export default FloatingButton;
