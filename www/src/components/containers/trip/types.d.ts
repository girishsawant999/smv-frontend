import { responseType } from 'components/common/Response';
import { srcSetType } from 'components/common/Img';
export type visaStatusType =
	| 'inProgress'
	| 'inProcess'
	| 'rejected'
	| 'approved'
	| 'attentionReq';
export type tripObjectType = {
	country: string;
	city: string;
	srcSet: string[] | srcSetType[];
	visaType: string;
	dates: string;
	status: visaStatusType;
	response?: responseType;
	documents: IDocumentStatusCardProps[];
	date_of_document_submission?: string;
	amount: number;
};
