import React, { useState } from 'react';
import PropTypes from 'prop-types';


PackInfo.prototype={
    days: PropTypes.string,
    price: PropTypes.string,
    oldPrice: PropTypes.string,
    description: PropTypes.string
}

function PackInfo({days, price, oldPrice, description}){
    const [checked, setChecked] = useState(true);
    return(
        <div className="relative country-pack-info-plan m-5 p-5 flex-col">
            <h3 className="country-pack-info-plan-days">
                {days}
            </h3>
            <div className="radio-btn absolute right-5 top-5">
                <div className="container" onClick={()=>setChecked(checked => !checked)}>
                    <input type="radio" checked={checked} name="radio" onChange={()=>setChecked(checked => !checked)}/>
                    <span className="checkmark"> </span>
                </div>
            </div>
            <div className="flex items-end">
                <p className="country-pack-info-plan-price">
                    {price}
                </p>
                <p className="country-pack-info-plan-old-price line-through">
                    {oldPrice}
                </p>
            </div>
            <div className="divider"> </div>
            <p className="country-pack-info-plan-description">
                {description}
            </p>
        </div>
    )
}
export default PackInfo