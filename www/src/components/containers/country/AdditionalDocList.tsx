import React, { useEffect, useState } from 'react';
import AdditionalDocListSubSection from './AdditionalDocListSubSection';

function AdditionalDocList({ data }){
    const[list, setList] = useState([]);
    useEffect(()=>{
        data = data.data.additionalDocList;
        setList(data);
    },[])
    return(
        <div className="additional-doc-list-div m-5">
            <div className="section-heading">Addtional Document List</div>
            {
                list.map((listItem, index)=> {
                  return <AdditionalDocListSubSection key={index} item={listItem}/>
                })
            }
        </div>
    )
}
export default AdditionalDocList