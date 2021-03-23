import React ,{Fragment} from "react";
import LandingPage from "../components/containers/landing";
import { GetServerSideProps } from "next";
import { fetchApi } from "../api";
import  Head  from "next/head";
import ErrorPage from "../components/containers/landing/Components/ErrorPage";
import { IInputDataProps } from "../components/containers/landing/types";

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await fetchApi('api/v1/ums/landing/landing')
  return {
    props: {
      status: res.status,
      response: res.response,
      error: res.error
    },
  }
}

type ILandingInfoProps= {
  status: number;
  error: string;
  response: IInputDataProps;
}

function Home({status, response, error}:ILandingInfoProps){
  return (
      <Fragment>
        <Head>
          <title>Home</title>
        </Head>
        {
          error === null ?
            <LandingPage LandingPageInfo={response}/>
            :
            <ErrorPage/>
        }
      </Fragment>
    )
}

export default Home