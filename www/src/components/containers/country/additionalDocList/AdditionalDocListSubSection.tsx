import React from 'react';
import Typography from '../../../common/Typography';

type IAdditionDocListSubSectionProps = {
    item:{
      condition:string;
      list:Array<string>;
    }
}

function AdditionalDocListSubSection({ item }:IAdditionDocListSubSectionProps){
    return(
        <div className="additional-doc-list-item-div">
            <Typography type="headingSemiBold16px" variant="h4">{item.condition}</Typography>
            <div className="list-items">
                <ul className="">
                    {
                        item.list.map((item, index)=> <li key={index}>
                            <Typography type="contentRegular14px" variant="p">{item}</Typography>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default AdditionalDocListSubSection