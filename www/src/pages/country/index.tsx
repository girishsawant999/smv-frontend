import React, { Fragment } from 'react';
import Head from 'next/head';
import CountryPage from 'components/containers/country';
import { GetServerSideProps } from 'next';
import { IInputDataProps } from '../../components/containers/country/types';
import { fetchApi, APIResponseType } from '../../api';
import ErrorPage from '../../components/containers/country/components/ErrorPage';

export const getServerSideProps:GetServerSideProps = async () => {
  try {
    const res:APIResponseType<IInputDataProps> = await fetchApi<IInputDataProps>('api/v1/ums/country/info');
    const data: IInputDataProps = res.data;
    return {
      props: {
        data: data
      }
    }
  } catch(err) {
    return {
      props: {
        data: {}
      }
    } 
  }
}

type ICountryInfoProps= {
    data: IInputDataProps;
}

function CountryPageMain({data}:ICountryInfoProps) {

    return (
        <Fragment>
            <Head>
                <title>Country</title>
            </Head>
            {
                data != null ?
                    <CountryPage countryInfo={data}/>
                :
                    <ErrorPage/>
            }

      </Fragment>
    )
}

export default CountryPageMain;