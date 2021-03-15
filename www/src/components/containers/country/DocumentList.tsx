import React, { useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../pages/country';
import Typography from '../../common/Typography';

function DocumentList({ data }:InferGetServerSidePropsType<typeof getServerSideProps>){
    const[list, setList] = useState([]);
    useEffect(()=>{
        data = data.data.documentList;
        setList(data);
    },[])
    return(
        <div className="doc-list-div m-5">
            {/*<div className="section-heading">Document List</div>*/}
            <Typography type="headingExtraBold18px" variant="h3">Document List</Typography>
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

export default DocumentList