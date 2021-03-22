import React, { Fragment } from 'react';
import Head from 'next/head';
import CountryPage from 'components/containers/country';
import { GetServerSideProps } from 'next';
import { IInputDataProps } from '../../components/containers/country/types';

export const getServerSideProps:GetServerSideProps = async () => {
    const res = await fetch('http://localhost:44444/api/v1/ums/country/info')
    const countryInfo = await res.json()
    return {
        props: {
            countryInfo,
        },
    }
}

type ICountryInfoProps= {
    countryInfo: IInputDataProps
}

function CountryPageMain({countryInfo}:ICountryInfoProps) {

    return (
        <Fragment>
            <Head>
                <title>Country</title>
            </Head>
            <CountryPage countryInfo={countryInfo}/>
      </Fragment>
    )
}

export default CountryPageMain;