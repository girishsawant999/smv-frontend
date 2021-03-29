import React from 'react';
import styles from './typography.module.css';
import {
	StyleType,
	weightType,
	sizeType,
	variantType,
	fontType,
	sizesObject
} from './types';
import { PhotoSizeSelectActual } from '@material-ui/icons';

type ITypographyProps = {
	type?: StyleType;
	weight: weightType;
	size: sizeType;
	sizes?: sizesObject[];
	variant: variantType;
	font?: fontType;
	className?: string;
	children:
		| React.ReactChild
		| React.ReactChildren
		| React.ReactChild[]
		| React.ReactChildren[];
};
const Typography = ({
	type = 'heading',
	weight,
	size,
	sizes = [],
	font = 'primary',
	className = '',
	variant,
	children
}: ITypographyProps) => {
	const Component = variant;

	return (
		<Component
			className={[
				className,
				styles[type],
				styles[weight],
				styles['size-' + size],
				...sizes.map((size: sizesObject) => {
					return styles[
						`size-${Object.keys(size)[0]}-${
							size[Object.keys(size)[0] as keyof sizesObject]
						}`
					];
				}),
				styles[font]
			].join(' ')}>
			{children}
		</Component>
	);
};

export default Typography;
