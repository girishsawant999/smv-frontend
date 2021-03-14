import React, { useEffect, useState } from 'react';
import Paragraph from '../../common/paragraph/Paragraph';

function CountryInfo({data}:any){
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
            <h1 className="country-info-heading">
                {name}
            </h1>
            <h3 className="country-info-subheading">
                {prcessingTime}
            </h3>
              <Paragraph>{description}</Paragraph>
        </div>
    )
}
export default CountryInfo