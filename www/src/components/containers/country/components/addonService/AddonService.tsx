import React, { useEffect, useState } from 'react';
import AddonInfo from '../addonInfo/AddonInfo';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../../../pages/country';
import Typography from '../../../../common/Typography';

type IAddonServiceProps={
    id: number;
    info: string;
    detail: string;
    price: string;
    oldPrice: string;
    description: string;
}
type IAddonServiceArrayProps={
    addonService: Array<IAddonServiceProps>;
    addonPacks: Array<number>;
    setAddonPacks: Function;
}
function AddonService({addonService, addonPacks, setAddonPacks}:IAddonServiceArrayProps){

    return(
        <>
            {
                addonService !== undefined ?
                    <section className="m-5">
                        <Typography size="18" weight="extra-bold" variant="h3">
                            Add-on services
                        </Typography>
                        {
                            addonService.map((packsItem:IAddonServiceProps, index) => {
                                return (
                                    <AddonInfo
                                        key={index}
                                        id={packsItem.id}
                                        info={packsItem.info}
                                        detail={packsItem.detail}
                                        price={packsItem.price}
                                        oldPrice={packsItem.oldPrice}
                                        description={packsItem.description}
                                        addonPacks={addonPacks}
                                        setAddonPacks={setAddonPacks}
                                    />
                                )
                            })
                        }
                    </section>
                :
                    <section></section>
            }
        </>
    )
}
export default AddonService