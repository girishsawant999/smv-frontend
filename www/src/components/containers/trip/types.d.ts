import { responseType } from 'components/common/Response';
export type visaStatusType = 'inProgress' | 'rejected' | 'approved' | 'pending';
export type tripObjectType = {
	country: string;
	city: string;
	srcSet: string[];
	visaType: string;
	dates: string;
	status: visaStatusType;
	response?: responseType;
	documents: IDocumentStatusCardProps[];
	date_of_document_submission?: string;
	amount: number;
};
