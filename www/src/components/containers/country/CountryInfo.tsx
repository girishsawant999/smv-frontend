import React, { useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../pages/country';
import Typography from '../../common/Typography';

function CountryInfo({data}:InferGetServerSidePropsType<typeof getServerSideProps>){
    const[name, setName] = useState("country name");
    const[prcessingTime, setProcessingTime] = useState("calculating days...");
    const[description, setDescription] = useState("country description");

    useEffect(()=>{
        data = data.data.countryInfo;
        setName(data.name);
        setProcessingTime(data.processingTime);
        setDescription(data.description);
    },[])


    return(
        <div className="country-info-div m-5">
            <Typography type="headingExtraBold24px" variant="h1">
                {name}
            </Typography>
            <Typography type="headingSemiBold16px" variant="h3">
                {prcessingTime}
            </Typography>
            <Typography type="contentRegular14px" variant="h3">
                {description}
            </Typography>
        </div>
    )
}
export default CountryInfo