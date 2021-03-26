import React from 'react';
import Img from 'components/common/Img/index';
type IHeaderImgProps = {
	country: string;
	srcSet: string[];
};

const HeaderImg = ({ country, srcSet }: IHeaderImgProps) => {
	return (
		<section>
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
