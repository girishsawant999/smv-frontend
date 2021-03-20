import React, { useEffect, useState } from 'react';
import AdditionalDocListSubSection from './AdditionalDocListSubSection';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../../../pages/country';
import Typography from '../../../../common/Typography';

type IAdditionDocListProps = {
      condition:string;
      list:Array<string>;
}
type IAdditionDocListArrayProps = {
    additionalDocList:Array<IAdditionDocListProps>
}

function AdditionalDocList({ additionalDocList }:IAdditionDocListArrayProps){

    return(
        <>
            {
                additionalDocList !== undefined ?
                    <section className="m-5">
                        <Typography weight="extra-bold" size="18" variant="h3" className="mb-1">
                            Additional Document List
                        </Typography>
                            {
                                additionalDocList.map((listItem:IAdditionDocListProps , index)=> {
                                    return <AdditionalDocListSubSection key={index} item={listItem}/>
                            })
                        }
                    </section>
                :
                <section></section>
            }
        </>
    )
}
export default AdditionalDocList