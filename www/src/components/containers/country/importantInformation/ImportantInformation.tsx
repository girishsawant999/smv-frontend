import React, { useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../../pages/country';
import Typography from '../../../common/Typography';
import styles from './importantInformation.module.css';

function ImportantInformation({data}:InferGetServerSidePropsType<typeof getServerSideProps>){
    const[list, setList] = useState([]);
    useEffect(()=>{
        data = data.data.importantInfo;
        setList(data);
    },[])
    return(
        <section className="m-5">
            <Typography type="headingExtraBold18px" variant="h3">Important information</Typography>
            <div>
                <ul className={styles.ul}>
                    {
                        list.map((listItem, index) => <li key={index}  className={styles.li}>
                            <Typography type="contentRegular14px" variant="p">{listItem}</Typography>
                        </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}
export default ImportantInformation