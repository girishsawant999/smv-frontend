import React from "react";
import LandingPage from "../components/containers/landing";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await fetch('http://localhost:44444/api/v1/ums/landing/landing')
  const data = await res.json()
  console.log(data);
  return {
    props: {
      data,
    },
  }
}


function Home({data}: InferGetServerSidePropsType<typeof getServerSideProps>){
  return <LandingPage data = {data}/>
}

export default Home