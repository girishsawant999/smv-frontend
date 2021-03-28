import Trip from 'components/containers/trip';
import { GetServerSideProps } from 'next';
import { fetchApi, APIResponseType } from 'api';
import React from 'react';
import { tripObjectType } from 'components/containers/trip/types';
import ErrorPage from 'components/containers/landing/Components/ErrorPage';

type ITripProps = {
	data: tripObjectType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	let id;
	if (context.params) {
		id = context.params.id;
	}
	try {
		const res: APIResponseType<tripObjectType> = await fetchApi<tripObjectType>(
			`api/v1/ums/trip/${id}`
		);
		const data: tripObjectType = res.data;
		return {
			props: {
				data: data
			}
		};
	} catch (err) {
		return {
			props: {
				data: {}
			}
		};
	}
};

function TripMain({ data }: ITripProps) {
	return <>{data != null ? <Trip {...data} /> : <ErrorPage />}</>;
}

export default TripMain;
