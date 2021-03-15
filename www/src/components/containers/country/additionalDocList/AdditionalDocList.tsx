import React, { useEffect, useState } from 'react';
import AdditionalDocListSubSection from './AdditionalDocListSubSection';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../../pages/country';
import Typography from '../../../common/Typography';

type IAdditionDocListProps = {
      condition:string;
      list:Array<string>;
}

function AdditionalDocList({ data }:InferGetServerSidePropsType<typeof getServerSideProps>){
    const[list, setList] = useState([]);
    useEffect(()=>{
        data = data.data.additionalDocList;
        setList(data);
    },[])
    return(
        <div className="m-5">
            <Typography type="headingExtraBold18px" variant="h3">Addtional Document List</Typography>
            {
                list.map((listItem:IAdditionDocListProps , index)=> {
                  return <AdditionalDocListSubSection key={index} item={listItem}/>
                })
            }
        </div>
    )
}
export default AdditionalDocList