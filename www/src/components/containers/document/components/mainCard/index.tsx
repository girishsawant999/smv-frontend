import BackButton from 'components/common/backButton';
import ProgressBar from 'components/common/ProgressBar';
import Typography from 'components/common/Typography';
import React from 'react';

function MainCard({ data }) {
	const onBackButtonClick = () => {};
	return (
		<>
			<BackButton onClick={onBackButtonClick} />
			<div className="flex justify-between items-center mt-5">
				<Typography
					variant="h3"
					size="24"
					type="heading"
					weight="extra-bold">
					{data.name}
				</Typography>
				<Typography
					variant="span"
					size="12"
					type="content"
					weight="semi-bold">
					<span className="text-#FFB600">{data.status}</span>
				</Typography>
			</div>
			<div className="mt-5 mb-10">
				<ProgressBar
					percent={(data.numOfCompletedDocs / data.totalNumOfDocs) * 100}
				/>
				<div className="flex justify-between mt-3 px-1 items-start">
					<Typography weight="semi-bold" size="16" variant="p">
						{data.relation}
					</Typography>
					<Typography weight="regular" size="12" variant="p">
						{`${data.numOfCompletedDocs} of ${data.totalNumOfDocs} documents uploaded`}
					</Typography>
				</div>
			</div>
		</>
	);
}

export default MainCard;
