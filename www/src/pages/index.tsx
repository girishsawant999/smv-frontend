import React, { Fragment } from 'react';
import LandingPage from '../components/containers/landing';
import { GetServerSideProps } from 'next';
import { fetchApi, APIResponseType, errorType } from '../api';
import Head from 'next/head';
import ErrorPage from '../components/containers/landing/Components/ErrorPage';
import { IInputDataProps } from '../components/containers/landing/types';

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const res: APIResponseType<IInputDataProps> = await fetchApi<IInputDataProps>(
			'api/v1/ums/landing/list?tags=SUGGESTED&tags=MOST_POPULAR'
		);
		const data: IInputDataProps = res.data;
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

type ILandingInfoProps = {
	data: IInputDataProps;
};

function Home({ data }: ILandingInfoProps) {
	return (
		<Fragment>
			<Head>
				<title>Home</title>
			</Head>
			{data != null ? <LandingPage LandingPageInfo={data} /> : <ErrorPage />}
		</Fragment>
	);
}

export default Home;
