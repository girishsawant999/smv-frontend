import React from 'react';
import Typography from '../../../common/Typography';
import styles from './additionalDocList.module.css';

type IAdditionDocListSubSectionProps = {
    item:{
      condition:string;
      list:Array<string>;
    }
}

function AdditionalDocListSubSection({ item }:IAdditionDocListSubSectionProps){
    return(
        <div>
            <Typography type="headingSemiBold16px" variant="h4">{item.condition}</Typography>
            <div className="list-items">
                <ul className={styles.ul}>
                    {
                        item.list.map((item, index)=> <li key={index} className={styles.li}>
                            <Typography type="contentRegular14px" variant="p">{item}</Typography>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default AdditionalDocListSubSection