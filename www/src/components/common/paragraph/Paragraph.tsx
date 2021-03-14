import React from 'react';

function Paragraph(props:any){
    return(
        <p className="country-info-description">{props.children}</p>
    )
}
export default Paragraph