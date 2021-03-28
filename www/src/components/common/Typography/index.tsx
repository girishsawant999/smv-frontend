import React from 'react';
import styles from './typography.module.css';
import { StyleType, weightType, sizeType, variantType, fontType } from './types';

type ITypographyProps = {
	type?: StyleType;
	weight: weightType;
	size: sizeType;
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
				styles[font]
			].join(' ')}>
			{children}
		</Component>
	);
};

export default Typography;
