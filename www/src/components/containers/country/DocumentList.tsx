import React, { useEffect, useState } from 'react';

function DocumentList({ data }){
    const[list, setList] = useState([]);
    useEffect(()=>{
        data = data.data.documentList;
        setList(data);
    },[])
    return(
        <div className="doc-list-div m-5">
            <div className="section-heading">Document List</div>
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

export default DocumentList