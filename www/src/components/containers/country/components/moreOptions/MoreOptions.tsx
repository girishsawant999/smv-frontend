import React from 'react';
import styles from './moreOptions.module.css'
import Typography from '../../../../common/Typography';

type IMoreInfoProps={
    moreOptions: Array<string>;
}

function MoreOptions({moreOptions}:IMoreInfoProps){
    return(
        <div className={styles.options}>
            {
                moreOptions.map((option)=>{
                    return (
                        <button className={styles.buttonStyle + " focus:outline-none"}>
                            <Typography weight={'extra-bold'} size={'12'} variant={'span'}>
                                {option}
                            </Typography>
                        </button>
                    )
                })
            }
        </div>
    )
}
export default MoreOptions