import React, { useEffect, useState } from 'react';
import AddonInfo from '../addonInfo/AddonInfo';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../../pages/country';
import Typography from '../../../common/Typography';

type IAddonServiceProps={
      info: string;
      detail: string;
      price: string;
      oldPrice: string;
      description: string;
}

function AddonService({data}:InferGetServerSidePropsType<typeof getServerSideProps>){
    const[packs, setPacks] = useState([]);
    useEffect(()=>{
        data = data.data.addonService;
        setPacks(data);
    },[])
    return(
        <section className="m-5">
            <Typography type="headingExtraBold18px" variant="h3">
                Add-on services
            </Typography>
            {
                packs.map((packsItem:IAddonServiceProps, index) => {
                    return (
                        <AddonInfo
                            key={index}
                            info={packsItem.info}
                            detail={packsItem.detail}
                            price={packsItem.price}
                            oldPrice={packsItem.oldPrice}
                            description={packsItem.description}
                        />
                    )
                })
            }
        </section>
    )
}
export default AddonService