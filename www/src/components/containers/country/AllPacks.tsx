import React, { useEffect, useState } from 'react';
import PackInfo from './PackInfo';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../pages/country';
import Typography from '../../common/Typography';

type IPackInfoProps={
  days: string;
  price: string;
  oldPrice: string;
  description: string;
}

function AllPacks({data}:InferGetServerSidePropsType<typeof getServerSideProps>){
    const[packs, setPacks] = useState([]);

    useEffect(()=>{
        data = data.data.packInfo;
        setPacks(data);
    },[])
    return(
        <div className="country-pack-info-div m-5">
            <div className="country-pack-info-top flex items-end justify-between mb-2">
                <Typography type="headingExtraBold18px" variant="h3">All packs</Typography>
                <h4 className="country-pack-show-all-btn">show relevant packs</h4>
            </div>
            <Typography type="contentSemiBold14px" variant="p">
                All our packs are inclusive of consultation fees, service charges & other taxes
            </Typography>
            {
                packs.map((packsItem :IPackInfoProps, index)=>{
                    return(
                        <PackInfo
                            key={index}
                            days={packsItem.days}
                            price={packsItem.price}
                            oldPrice={packsItem.oldPrice}
                            description={packsItem.description}
                        />
                    )
                })
            }
        </div>
    )
}
export default AllPacks