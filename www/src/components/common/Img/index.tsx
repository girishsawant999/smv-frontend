import React from 'react';
import LazyLoad from 'react-lazyload';

Img.propTypes = {};

type IImgProps = {
	alt: string;
	className?: string;
	width?: string;
	height?: string;
	srcSet: Array<string>;
	isFromAssets?: boolean;
	type?: string;
	placeHolderBg?: string;
};

const baseLocation = '/assets/images/';
function Img({
	alt,
	className = '',
	width = 'auto',
	height = 'auto',
	srcSet,
	type = 'image/png',
	isFromAssets = true,
	placeHolderBg = 'transparent'
}: IImgProps) {
	let _srcSet = srcSet;
	if (isFromAssets) {
		_srcSet = _srcSet.map((src) => baseLocation.concat(src.trim()));
	}

	const Styles = {
		imgBackground: { background: placeHolderBg }
	};

	return (
		<LazyLoad offset={100} height={100} once>
			<picture style={Styles.imgBackground}>
				<source type={type} srcSet={_srcSet.join(', ')} />
				<img
					className={className}
					width={width}
					height={height}
					alt={alt}
					src={_srcSet[0]}
					srcSet={_srcSet.join(', ')}
					style={Styles.imgBackground}
				/>
			</picture>
		</LazyLoad>
	);
}

export default Img;
