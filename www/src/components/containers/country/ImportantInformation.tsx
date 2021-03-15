import React, { useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../pages/country';
import Typography from '../../common/Typography';

function ImportantInformation({data}:InferGetServerSidePropsType<typeof getServerSideProps>){
    const[list, setList] = useState([]);
    useEffect(()=>{
        data = data.data.importantInfo;
        setList(data);
    },[])
    return(
        <div className="imp-info-div m-5">
            <Typography type="headingExtraBold18px" variant="h3">Important information</Typography>
            <div className="list-items">
                <ul className="">
                    {
                        list.map((listItem, index) => <li key={index}>
                            <Typography type="contentRegular14px" variant="p">{listItem}</Typography>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default ImportantInformation