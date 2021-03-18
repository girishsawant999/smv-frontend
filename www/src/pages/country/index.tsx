import React, { Fragment } from 'react';
import Head from 'next/head'
import CountryPage from 'components/containers/country';
import { InferGetServerSidePropsType } from 'next';
import { GetServerSideProps } from 'next'

export const getServerSideProps:GetServerSideProps = async () => {
    const res = await fetch('http://localhost:44444/api/v1/ums/country/info')
    const data = await res.json()
    console.log(data);
    return {
        props: {
            data,
        },
    }
}

function CountryPageMain({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Fragment>
            <Head>
                <title>Country</title>
            </Head>
            <CountryPage data={data}/>
      </Fragment>
    )
}

export default CountryPageMain;