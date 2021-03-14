import React from 'react';

function AdditionalDocListSubSection({ item }){
    return(
        <div className="additional-doc-list-item-div">
            <div className="section-subheading">{item.condition}</div>
            <div className="list-items">
                <ul className="">
                    {
                        item.list.map((item, index)=> <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default AdditionalDocListSubSection