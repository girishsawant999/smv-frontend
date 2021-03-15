import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../common/Typography';

type IAddonInfoProps={
    info: string;
    detail: string;
    price: string;
    oldPrice: string;
    description: string;
}

function AddonInfo({info, detail, price, oldPrice, description}: IAddonInfoProps){
    const [checked, setChecked] = useState(false);
    return(
        <div className="relative addon-info-div m-5 p-5 flex-col">
            <Typography type="headingSemiBold16px" variant="h4">
                {info}
            </Typography>
            <div className="checkbox-btn absolute top-5 right-5">
                <label className="container">
                    <input type="checkbox" checked={checked} onChange={()=>{setChecked(checked => !checked)}}/>
                    <span className="checkmark"> </span>
                </label>
            </div>
            <Typography type="contentRegular14px" variant="p" className="mr-2.5">
                {detail}
            </Typography>
            <div className="flex items-end">
                <Typography type="contentExtraBold20px" variant="p">
                    {price}
                </Typography>
                <Typography type="contentRegular14px" variant="p" className="line-through ml-2.5">
                    {oldPrice}
                </Typography>
            </div>
            <div className="divider"></div>
            <Typography type="contentSemiBold12px" variant="p">
                {description}
            </Typography>
        </div>
    )
}
export default AddonInfo