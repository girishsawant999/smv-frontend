import React from 'react';
import Typography from 'components/common/Typography';
import DocumentStatusCard from 'components/common/DocumentStatusCard';
import { IDocumentStatusCardProps } from 'components/common/DocumentStatusCard';
import { visaStatusType } from 'components/containers/trip/types';

export type IDocumentsSection = {
	documents: IDocumentStatusCardProps[];
	date_of_document_submission?: string;
	visaStatus: visaStatusType;
};

const getHeading = (visaStatus: visaStatusType): string => {
	if (visaStatus === 'inProgress') {
		return 'Document upload';
	} else {
		return 'Documents submitted';
	}
};
const getContent = (visaStatus: visaStatusType): string => {
	switch (visaStatus) {
		case 'inProgress':
			return 'The sooner these docs are uploaded the sooner we can start the visa processing';
		case 'inProcess':
			return 'We might get back to you incase any additional docs are required';
		case 'attentionReq':
			return 'The sooner these docs are uploaded the sooner we can start the visa processing';
		case 'approved':
			return 'Your docs are always safe with us. Experience superfast processing of visas now';
		case 'rejected':
			return 'Your docs are always safe with us. Experience superfast processing of visas now';
	}
};

const DocumentsSection = ({
	documents,
	date_of_document_submission,
	visaStatus
}: IDocumentsSection) => {
	return (
		<>
			<div className="flex flex-wrap my-3">
				<div className="w-8/12">
					<Typography weight="extra-bold" size="18" variant="h3">
						{getHeading(visaStatus)}
					</Typography>
				</div>
				<div className="w-4/12 text-right">
					{date_of_document_submission && (
						<Typography
							type="content"
							size="14"
							weight="regular"
							variant="p">
							{date_of_document_submission}
						</Typography>
					)}
				</div>
			</div>
			<Typography type="content" weight="semi-bold" size="14" variant="p">
				{getContent(visaStatus)}
			</Typography>
			{['inProgress', 'attentionReq'].includes(visaStatus) &&
				documents.map((document) => {
					return (
						<DocumentStatusCard {...document} visaStatus={visaStatus} />
					);
				})}
		</>
	);
};
export default DocumentsSection;
