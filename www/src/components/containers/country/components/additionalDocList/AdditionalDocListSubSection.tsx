import React from 'react';
import Typography from '../../../../common/Typography';
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
            <Typography type="content" weight="semi-bold" size="16" variant="h4" className="mb-2.5">
                {item.condition}
            </Typography>
            <div className="list-items">
                <ul className={styles.ul}>
                    {
                        item.list.map((value, index)=> <li key={index} className={styles.li}>
                            <Typography type="content" weight="regular" size="14" variant="p" className="mb-4">
                                {value}
                            </Typography>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default AdditionalDocListSubSection