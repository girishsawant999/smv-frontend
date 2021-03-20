import React, { useState } from 'react';
import Typography from '../../../../common/Typography';
import styles from './addonInfo.module.css';

type IAddonInfoProps={
    id: number;
    info: string;
    detail: string;
    price: string;
    oldPrice: string;
    description: string;
    addonPacks: Array<number>;
    setAddonPacks: Function;
}

function AddonInfo({id, info, detail, price, oldPrice, description, addonPacks, setAddonPacks}: IAddonInfoProps){
    function removeAddonPack(id:number) {
        return addonPacks.filter(function(itemId:number){
            return itemId != id;
        });

    }
    return(
        <div className={styles.addon_info_div+ " relative m-5 p-5 flex-col"}>
            <Typography weight="semi-bold" size="16" variant="h4" className="mb-2.5">
                {info}
            </Typography>
            <div className={styles.checkbox_btn + " absolute top-5 right-5"}>
                <label className={styles.container}>
                    <input
                        type="checkbox"
                        checked={addonPacks.includes(id)}
                        onChange={()=>{addonPacks.includes(id)? setAddonPacks(removeAddonPack(id)) : setAddonPacks([...addonPacks, id])}}
                    />
                    <span className={styles.checkmark}> </span>
                </label>
            </div>
            <Typography type="content" weight="regular" size="14" variant="p" className="mr-5 mb-2.5">
                {detail}
            </Typography>
            <div className="flex items-end">
                <Typography weight="extra-bold" size="20" variant="p">
                    {price}
                </Typography>
                <Typography weight="regular" size="14"  variant="p" className="line-through ml-2.5">
                    {oldPrice}
                </Typography>
            </div>
            <hr className={styles.divider + " my-4"}/>
            <Typography weight="semi-bold" size="12" variant="p">
                {description}
            </Typography>
        </div>
    )
}
export default AddonInfo