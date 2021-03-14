import React, { useEffect, useState } from 'react';

function ImportantInformation({data}){
    const[list, setList] = useState([]);
    useEffect(()=>{
        data = data.data.importantInfo;
        setList(data);
    },[])
    return(
        <div className="imp-info-div m-5">
            <div className="section-heading">Important information</div>
            <div className="list-items">
                <ul className="">
                    {
                        list.map((listItem, index) => <li key={index}>{listItem}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default ImportantInformation