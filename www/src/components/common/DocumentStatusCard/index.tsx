import React from 'react';
import Typography from 'components/common/Typography';
import ProgressBar from 'components/common/ProgressBar';
import styles from './DocumentStatusCard.module.css';
import { visaStatusType } from 'components/containers/trip/types';

export type IDocumentStatusCardProps = {
	name: string;
	status: 'notStarted' | 'inProgress' | 'completed';
	progress: number;
	relation: string;
	numOfCompletedDocs: number;
	totalNumOfDocs: number;
	visaStatus: visaStatusType;
};

const DocumentStatusCard = ({
	name,
	status,
	relation,
	numOfCompletedDocs,
	totalNumOfDocs,
	visaStatus
}: IDocumentStatusCardProps) => {
	const getStatusText = (): string => {
		if (visaStatus === 'inProgress' && status === 'notStarted') {
			return 'Yet to start';
		}
		if (visaStatus === 'attentionReq') {
			return 'Attention required';
		}
		return '';
	};

	const getColorFromVisaType = () => {
		if (visaStatus === 'attentionReq') {
			return 'red';
		} else {
			return 'black';
		}
	};

	return (
		<div
			className={
				styles.docStatusCard + ' px-5 py-5 my-5 md:my-20 cursor-pointer'
			}>
			<div className="flex mb-5 md:mb-7">
				<div className="w-6/12">
					<Typography
						weight="extra-bold"
						size="20"
						variant="h4"
						sizes={[{ lg: '24' }]}>
						{name}
					</Typography>
				</div>
				{['inProgress', 'attentionReq'].includes(visaStatus) && (
					<div className="w-6/12 text-right relative">
						<Typography
							weight="semi-bold"
							size="12"
							variant="p"
							className={
								'absolute bottom-0 right-0 ' + styles[visaStatus]
							}>
							{getStatusText()}
						</Typography>
					</div>
				)}
			</div>
			<ProgressBar
				percent={
					(numOfCompletedDocs / totalNumOfDocs) * 100
						? (numOfCompletedDocs / totalNumOfDocs) * 100
						: 2
				}
				color={getColorFromVisaType()}
			/>
			<div className="flex mt-3 md:mt-7">
				<div className="w-4/12">
					<Typography weight="semi-bold" size="16" variant="p">
						{relation}
					</Typography>
				</div>
				<div className="w-8/12 text-right">
					<Typography weight="regular" size="12" variant="p">
						{`${numOfCompletedDocs} of ${totalNumOfDocs} documents uploaded`}
					</Typography>
				</div>
			</div>
		</div>
	);
};
export default DocumentStatusCard;
