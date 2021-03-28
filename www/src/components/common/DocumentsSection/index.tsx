import React from 'react';
import Typography from 'components/common/Typography';
import DocumentStatusCard from 'components/common/DocumentStatusCard';
import { IDocumentStatusCardProps } from 'components/common/DocumentStatusCard';

type documentStatusType = 'inProgress' | 'submitted';
export type IDocumentsSection = {
	documents: IDocumentStatusCardProps[];
	date_of_document_submission?: string;
};

const DocumentsSection = ({
	documents,
	date_of_document_submission
}: IDocumentsSection) => {
	const status: documentStatusType = documents.every((document) => {
		return document.status === 'completed';
	})
		? 'submitted'
		: 'inProgress';

	const getHeading = (): string => {
		switch (status) {
			case 'inProgress':
				return 'Document upload';
			case 'submitted':
				return 'Documents submitted';
		}
	};
	const getContent = (): string => {
		switch (status) {
			case 'inProgress':
				return 'The sooner these docs are uploaded the sooner we can start the visa processing';
			case 'submitted':
				return 'Your docs are always safe with us. Experience superfast processing of visas now';
		}
	};
	return (
		<>
			<div className="flex flex-wrap my-3">
				<div className="w-8/12">
					<Typography weight="extra-bold" size="18" variant="h3">
						{getHeading()}
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
				{getContent()}
			</Typography>
			{status === 'inProgress' &&
				documents.map((document) => {
					return <DocumentStatusCard {...document} />;
				})}
		</>
	);
};
export default DocumentsSection;
