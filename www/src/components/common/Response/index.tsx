import React from 'react';
import Typography from 'components/common/Typography';
import { visaStatusType } from 'components/containers/trip/types';

export type responseType = {
	text: string;
	date: string;
	visaStatus: visaStatusType;
};

const getResponseHeading = (visaStatus: visaStatusType): string => {
	if (['inProcess', 'attentionReq'].includes(visaStatus)) {
		return 'Expected Response';
	}
	return 'Response';
};

const ResponseSection = ({ text, date, visaStatus }: responseType) => {
	return (
		<>
			<div className="flex flex-wrap my-3">
				<div className="w-8/12">
					<Typography weight="extra-bold" size="18" variant="h3">
						{getResponseHeading(visaStatus)}
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
