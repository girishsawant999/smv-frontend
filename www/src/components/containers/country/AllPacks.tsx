import React, { useEffect, useState } from 'react';
import PackInfo from './PackInfo';

function AllPacks({data}:any){
    const[packs, setPacks] = useState([]);

    useEffect(()=>{
        data = data.data.packInfo;
        setPacks(data);
    },[])
    return(
        <div className="country-pack-info-div m-5">
            <div className="country-pack-info-top flex items-end justify-between mb-2">
                <h2 className="section-heading">All packs</h2>
                <h4 className="country-pack-show-all-btn">show relevant packs</h4>
            </div>
            <p className="country-pack-info-description">
                All our packs are inclusive of consultation fees, service charges & other taxes
            </p>
            {
                packs.map((packsItem, index)=>{
                    return(
                        <PackInfo
                            key={index}
                            days={packsItem.days}
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
export default AllPacks