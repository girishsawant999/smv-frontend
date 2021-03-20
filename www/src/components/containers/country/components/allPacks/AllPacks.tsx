import React, { useEffect, useState } from 'react';
import PackInfo from '../packInfo/PackInfo';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../../../pages/country';
import Typography from '../../../../common/Typography';
import styles from './allPacks.module.css';

type IPackInfoProps = {
    id: number
    days: string;
    price: string;
    oldPrice: string;
    description: string;
}
type IPackInfoArrayProps={
    packsInfo: Array<IPackInfoProps>;
    selectedPack: number;
    setSelectedPack: Function;
}

function AllPacks({packsInfo, selectedPack, setSelectedPack}:IPackInfoArrayProps){
    return(
        <>
            {
                packsInfo !== undefined ?
                    <section className="m-5">
                        <div className=" flex items-end justify-between mb-2.5">
                            <Typography size="18" weight="extra-bold" variant="h3">
                                All packs
                            </Typography>
                            <Typography size="12" weight="extra-bold" variant="h4" className="underline cursor-pointer">
                                show relevant packs
                            </Typography>
                        </div>
                        <Typography type="content" weight="semi-bold" size="14" variant="p" className="mb-1">
                            All our packs are inclusive of consultation fees, service charges & other taxes
                        </Typography>
                        {
                            packsInfo.map((packsItem :IPackInfoProps, index)=>{
                                return(
                                    <PackInfo
                                        key={index}
                                        id={packsItem.id}
                                        days={packsItem.days}
                                        price={packsItem.price}
                                        oldPrice={packsItem.oldPrice}
                                        description={packsItem.description}
                                        selectedPack={selectedPack}
                                        setSelectedPack={setSelectedPack}
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
export default AllPacks