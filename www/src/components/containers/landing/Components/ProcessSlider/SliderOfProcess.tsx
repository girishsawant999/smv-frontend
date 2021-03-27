import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './ProcessDisplay';

function SliderOfProcess() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 3000
	};
	const arr = [1, 2, 3];
	return (
		<div>
			<Slider {...settings}>
				{arr.map((item, index) => {
					return (
						<div>
							<Slide key={index} buttonIndex={item} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
}

export default SliderOfProcess;
