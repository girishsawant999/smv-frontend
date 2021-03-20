import React, { useState } from 'react';
import Typography from '../../../../common/Typography';
import styles from "./packInfo.module.css";

type IPackInfoProps={
    id: number;
    days: string;
    price: string;
    oldPrice: string;
    description: string;
    selectedPack: number;
    setSelectedPack: Function;
}

function PackInfo({id, days, price, oldPrice, description, selectedPack, setSelectedPack}:IPackInfoProps){

    return(
        <div className={styles.country_pack_info_plan+" relative mt-4 p-5 flex-col"}>
            <Typography size="16" weight="semi-bold" variant="h4" className="mb-1">
                {days}
            </Typography>
            <div className={styles.radio_btn+ " absolute right-5 top-5"}>
                <div className={styles.container}>
                    <form>
                        <label>
                            <input type="radio" checked={id===selectedPack} name="radio" onChange={()=>setSelectedPack(id)}/>
                            <span className={styles.checkmark}> </span>
                        </label>
                    </form>
                </div>
            </div>
            <div className="flex items-end">
                <Typography weight="extra-bold" size="20" variant="p">
                    {price}
                </Typography>
                <Typography weight="regular" size="14" variant="p" className="line-through ml-2.5">
                    {oldPrice}
                </Typography>
            </div>
            <hr className={styles.divider + " my-4"}/>
            <Typography size="12" weight="semi-bold" variant="p">
                {description}
            </Typography>
        </div>
    )
}
export default PackInfo