import React, { useState } from 'react';
import Typography from '../../common/Typography';

type IPackInfoProps={
    days: string;
    price: string;
    oldPrice: string;
    description: string;
}

function PackInfo({days, price, oldPrice, description}:IPackInfoProps){
    const [checked, setChecked] = useState(true);
    return(
        <div className="relative country-pack-info-plan m-5 p-5 flex-col">
            <Typography type="headingSemiBold16px" variant="h4">
                {days}
            </Typography>
            <div className="radio-btn absolute right-5 top-5">
                <div className="container" onClick={()=>setChecked(checked => !checked)}>
                    <input type="radio" checked={checked} name="radio" onChange={()=>setChecked(checked => !checked)}/>
                    <span className="checkmark"> </span>
                </div>
            </div>
            <div className="flex items-end">
                <Typography type="contentExtraBold20px" variant="p">
                    {price}
                </Typography>
                <Typography type="contentRegular14px" variant="p" className="line-through ml-2.5">
                    {oldPrice}
                </Typography>
            </div>
            <div className="divider"> </div>
            <Typography type="contentSemiBold12px" variant="p">
                {description}
            </Typography>
        </div>
    )
}
export default PackInfo