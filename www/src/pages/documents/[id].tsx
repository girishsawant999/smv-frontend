import Document from 'components/containers/document';
import { GetServerSideProps } from 'next';
import { fetchApi, APIResponseType } from 'api';
import React from 'react';
import { DocumentObjectType } from 'components/containers/document/types.d';
import ErrorPage from 'components/containers/landing/Components/ErrorPage';

type IDocumentProps = {
	data: DocumentObjectType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	let id;
	if (context.params) {
		id = context.params.id;
	}
	return {
		props: {
			data: {
				id
			}
		}
	};
	// try {
	// 	const res: APIResponseType<DocumentObjectType> = await fetchApi<DocumentObjectType>(
	// 		`api/v1/ums/documents/${id}`
	// 	);
	// 	const data: DocumentObjectType = res.data;
	// 	return {
	// 		props: {
	// 			data: data,
	// 			id
	// 		}
	// 	};
	// } catch (err) {
	// 	return {
	// 		props: {
	// 			data: {
	//                 id
	//             }
	// 		}
	// 	};
	// }
};

function DocumentMain({ data }: IDocumentProps) {
	return <>{data != null ? <Document {...data} /> : <ErrorPage />}</>;
}

export default DocumentMain;
