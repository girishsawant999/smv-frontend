import React from 'react';
import LazyLoad from 'react-lazyload';

type IIconProps = {
	src: string;
	alt: string;
	className?: string;
	srcSet?: string;
	height?: number;
};

const baseLocation = '/assets/icons/';
function Icon({ src, alt, className, srcSet, height }: IIconProps) {
	return (
		<LazyLoad offset={100} height={height} resize={true}>
			<img
				src={baseLocation + src}
				srcSet={srcSet
					?.split(',')
					.map((src) => {
						return baseLocation + src.trim();
					})
					.join(',')}
				alt={alt}
				className={className + 'w-full h-full'}
			/>
		</LazyLoad>
	);
}

export default Icon;
