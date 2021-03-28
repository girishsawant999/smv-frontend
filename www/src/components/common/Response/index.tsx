import React from 'react';
import Typography from 'components/common/Typography';

export type responseType = {
	text: string;
	date: string;
};

const ResponseSection = ({ text, date }: responseType) => {
	return (
		<>
			<div className="flex flex-wrap my-3">
				<div className="w-8/12">
					<Typography weight="extra-bold" size="18" variant="h3">
						Response
					</Typography>
				</div>
				<div className="w-4/12 text-right">
					<Typography
						type="content"
						size="14"
						weight="regular"
						variant="p">
						{date}
					</Typography>
				</div>
			</div>
			<Typography type="content" weight="semi-bold" size="14" variant="p">
				{text}
			</Typography>
		</>
	);
};
export default ResponseSection;
