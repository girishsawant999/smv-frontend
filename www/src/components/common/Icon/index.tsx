import React from 'react';
import Image from 'next/image';

type IIconProps = {
	src: string;
	alt: string;
	className?: string;
	srcSet?: string;
};

const baseLocation = '/assets/icons/';
function Icon({ src, alt, className, srcSet }: IIconProps) {
	return (
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
	);
}

export default Icon;
