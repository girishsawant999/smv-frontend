import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddonInfo.prototype={
    days: PropTypes.string,
    info: PropTypes.string,
    price: PropTypes.string,
    oldPrice: PropTypes.string,
    description: PropTypes.string
}

function AddonInfo({info, detail, price, oldPrice, description}){
    const [checked, setChecked] = useState(false);
    return(
        <div className="relative addon-info-div m-5 p-5 flex-col">
            <p className="addon-info-plan">
                {info}
            </p>
            <div className="checkbox-btn absolute top-5 right-5">
                <label className="container">
                    <input type="checkbox" checked={checked} onChange={()=>{setChecked(checked => !checked)}}/>
                    <span className="checkmark"> </span>
                </label>
            </div>
            <h3 className="addon-info-detail mr-10">
                {detail}
            </h3>
            <div className="flex items-end">
                <p className="addon-info-plan-price">
                    {price}
                </p>
                <p className="addon-info-plan-old-price line-through">
                    {oldPrice}
                </p>
            </div>
            <div className="divider"></div>
            <p className="addon-info-plan-description">
                {description}
            </p>
        </div>
    )
}
export default AddonInfo