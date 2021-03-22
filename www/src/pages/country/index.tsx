import React, { Fragment } from 'react';
import Head from 'next/head';
import CountryPage from 'components/containers/country';
import { GetServerSideProps } from 'next';
import { IInputDataProps } from '../../components/containers/country/types';
import { fetchApi } from '../../api';
import ErrorPage from '../../components/containers/country/components/ErrorPage';

export const getServerSideProps:GetServerSideProps = async () => {
    const res = await fetchApi('api/v1/ums/country/info')
    // const countryInfo = "await res.json()"
    return {
        props: {
            status: res.status,
            response: res.response,
            error: res.error
        },
    }
}

type ICountryInfoProps= {
    status: number;
    error: string;
    response: IInputDataProps;
}

function CountryPageMain({status, response, error}:ICountryInfoProps) {

    return (
        <Fragment>
            <Head>
                <title>Country</title>
            </Head>
            {
                error === null ?
                    <CountryPage countryInfo={response}/>
                :
                    <ErrorPage/>
            }

      </Fragment>
    )
}

export default CountryPageMain;