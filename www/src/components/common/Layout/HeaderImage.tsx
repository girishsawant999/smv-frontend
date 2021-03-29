import React from 'react';
import Img, { srcSetType } from 'components/common/Img/index';
type IHeaderImgProps = {
	country: string;
	srcSet: string[] | srcSetType[];
};

const HeaderImg = ({ country, srcSet }: IHeaderImgProps) => {
	return (
		<section className="md:relative md:top-40">
			<Img
				alt={'view of ' + country}
				className={'w-full'}
				srcSet={srcSet}
				placeHolderBg={'#f5f4f5'}
			/>
		</section>
	);
};
export default HeaderImg;
