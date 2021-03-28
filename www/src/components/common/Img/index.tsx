import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

/* Usage 
If a query in a media attribute evaluates to true, then the browser must use that source; otherwise, it’s skipped.
sizes is the length that is going to be taken up by the rendered image
srcSet contains the various images to be loaded

<Img
	alt="cover image test"
	srcSet={
		[
			{
				"media":"(min-width: 768px)",
				"srcSet": [
					'landing/earth_globe_image/bitmap.png 640w',
					'landing/eath_globe_image/bitmap@2x.png 768w',
					'landing/earth_globe_image/bitmap@3x.png 1024w'
				],
				sizes: "33.3vw"
			},
			{
				"srcSet": [
					'landing/cover_images/cover1@1x.png 640w',
					'landing/cover_images/cover1@2x.png 768w',
					'landing/cover_images/cover1@3x.png 1024w'
				],
			}
		]
	}
	width="100%"
	className="flex"
/>
*/

Img.propTypes = {};

type srcSetType = {
	srcSet: string[];
	media?: string;
	sizes?: string;
};

type IImgProps = {
	alt: string;
	className?: string;
	width?: string;
	height?: string;
	srcSet: Array<string> | Array<srcSetType>;
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
	let _srcSet: (string | srcSetType)[] = srcSet;

	if (isFromAssets) {
		_srcSet = _srcSet.map((set_elem: string | srcSetType) => {
			if (typeof set_elem === 'string') {
				return baseLocation.concat(set_elem.trim());
			} else {
				set_elem.srcSet = set_elem.srcSet.map((src) => {
					return baseLocation.concat(src.trim());
				});
				return set_elem;
			}
		});
	}

	const getSourceElements = () => {
		if (typeof _srcSet[0] === 'string') {
			return <source type={type} srcSet={_srcSet.join(', ')} />;
		} else {
			return _srcSet.map((set_elem: srcSetType | string) => {
				if (typeof set_elem === 'string') {
					return '';
				}
				return (
					<source
						type={type}
						media={set_elem.media}
						srcSet={set_elem.srcSet.join(', ')}
						sizes={set_elem.sizes}
					/>
				);
			});
		}
	};

	const Styles = {
		imgBackground: { background: placeHolderBg }
	};

	return (
		<LazyLoad offset={100} height={100} once>
			<picture style={Styles.imgBackground}>
				{getSourceElements()}
				<img
					className={className}
					width={width}
					height={height}
					alt={alt}
					src={
						typeof _srcSet[0] === 'string'
							? _srcSet[0]
							: _srcSet[0].srcSet[0]
					}
					srcSet={
						typeof _srcSet[0] === 'string'
							? _srcSet.join(', ')
							: _srcSet[0].srcSet.join(', ')
					}
					style={Styles.imgBackground}
				/>
			</picture>
		</LazyLoad>
	);
}
export default Img;
