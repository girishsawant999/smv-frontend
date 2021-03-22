import React, { Fragment } from 'react';
import Head from 'next/head'
import CountryPage from 'components/containers/country';
import { GetServerSideProps } from 'next'

export const getServerSideProps:GetServerSideProps = async () => {
    const res = await fetch('http://localhost:44444/api/v1/ums/country/info')
    const countryInfo = await res.json()
    return {
        props: {
            countryInfo,
        },
    }
}
type IPackInfo={
    id: number;
    days: string;
    price: string;
    oldPrice: string;
    description: string;
}
type IAddonService={
    id: number;
    info: string;
    detail: string;
    price: string;
    oldPrice: string;
    description: string;
}
type IAdditionalDoc={
    condition: string;
    list: Array<string>;
}
type IFaq = {
    question: string;
    answer: string;
}
type IInputDataProps ={
    success: boolean;
    data: {
        countryInfo: {
            name: string;
            processingTime: string;
            description: string;
        };
        packsInfo: Array<IPackInfo>;
        addonService: Array<IAddonService>;
        importantInfo: Array<string>;
        documentList: Array<string>;
        additionalDocList: Array<IAdditionalDoc>;
        faq: Array<IFaq>;
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