import React, { useEffect, useState } from 'react';
import AddonInfo from './AddonInfo';
import PackInfo from './PackInfo';

function AddonService({data}:any){
    const[packs, setPacks] = useState([]);
    useEffect(()=>{
        data = data.data.addonService;
        setPacks(data);
    },[])
    return(
        <div className="add-on-service-div m-5">
            <div className="section-heading">Add-on services</div>
            {
                packs.map((packsItem, index) => {
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
        </div>
    )
}
export default AddonService