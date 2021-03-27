import React from 'react';
import Img from '../../../../common/Img';
import Typography from '../../../../common/Typography';

type ISliderSlideProps = {
	buttonIndex: number;
};

function getImage(buttonIndex: number) {
	if (buttonIndex === 1) {
		return (
			<Img
				alt="Group image to upload docs"
				srcSet={[
					'landing/ProcessSlider_image_1/group-7.png 1x',
					'landing/ProcessSlider_image_1/group-7@2x.png 2x',
					'landing/ProcessSlider_image_1/group-7@3x.png 3x'
				]}
				width="100%"
				className="mb-5"
			/>
		);
	} else if (buttonIndex === 3) {
		return (
			<div className="flex">
				<div>
					<Img
						alt="Group image to relax"
						srcSet={[
							'landing/ProcessSlider_image_3/group-2.png 1x',
							'landing/ProcessSlider_image_3/group-2@2x.png 2x',
							'landing/ProcessSlider_image_3/group-2@3x.png 3x'
						]}
						width="100%"
					/>
				</div>
				<div>
					<Img
						alt="Group image"
						srcSet={[
							'landing/ProcessSlider_image_3/group.png 1x',
							'landing/ProcessSlider_image_3/group@2x.png 2x',
							'landing/ProcessSlider_image_3/group@3x.png 3x'
						]}
						width="100%"
						className="-ml-1 mb-12"
					/>
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex">
				<div>
					<Img
						alt="Group image to reviewed by expert"
						srcSet={[
							'landing/ProcessSlider_image_2/bitmap.png 1x',
							'landing/ProcessSlider_image_2/bitmap@2x.png 2x',
							'landing/ProcessSlider_image_2/bitmap@3x.png 3x'
						]}
						width="100%"
					/>
				</div>
				<div>
					<Img
						alt="Group image"
						srcSet={[
							'landing/ProcessSlider_image_2/bitmap_2.png 1x',
							'landing/ProcessSlider_image_2/bitmap_2@2x.png 2x',
							'landing/ProcessSlider_image_2/bitmap_2@3x.png 3x'
						]}
						width="100%"
						className="-ml-3 mb-12"
					/>
				</div>
			</div>
		);
	}
}

function getStatement(buttonIndex: number) {
	if (buttonIndex == 1) {
		return 'Add Co-Travellers & Upload Docs';
	}
	if (buttonIndex == 2) {
		return 'Make a payment & Get reviewed by experts';
	} else {
		return 'Submit your application & Relax';
	}
}

function Slide(props: ISliderSlideProps) {
	return (
		<div>
			<div className="mt-12 flex justify-center">
				{getImage(props.buttonIndex)}
			</div>
			<div>
				<Typography
					type="content"
					weight="semi-bold"
					size="16"
					variant="p"
					className="flex justify-center rounded-3xl">
					{getStatement(props.buttonIndex)}
				</Typography>
			</div>
			<div className="flex justify-center mt-12">
				<div>
					<Typography
						type="heading"
						size="14"
						weight={`${
							props.buttonIndex === 1
								? 'extra-bold-white'
								: 'extra-bold'
						}`}
						className={`${
							props.buttonIndex === 1 ? 'bg-#1A181B' : 'bg-#F5F4F5'
						} " ml-4 w-16 h-16 rounded-3xl px-7 py-5 "`}
						variant="h3">
						1
					</Typography>
				</div>
				<div>
					<div>
						<Typography
							type="heading"
							size="14"
							weight={`${
								props.buttonIndex === 2
									? 'extra-bold-white'
									: 'extra-bold'
							}`}
							className={`${
								props.buttonIndex === 2 ? 'bg-#1A181B' : 'bg-#F5F4F5'
							} " ml-4 w-16 h-16 rounded-3xl px-7 py-5 "`}
							variant="h3">
							2
						</Typography>
					</div>
				</div>
				<div>
					<div>
						<Typography
							type="heading"
							size="14"
							weight={`${
								props.buttonIndex === 3
									? 'extra-bold-white'
									: 'extra-bold'
							}`}
							className={`${
								props.buttonIndex === 3 ? 'bg-#1A181B' : 'bg-#F5F4F5'
							} " ml-4 w-16 h-16 rounded-3xl px-7 py-5 "`}
							variant="h3">
							3
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Slide;
