import React from 'react';
import Typography from '../../../../common/Typography';
import styles from './importantInformation.module.css';

type IImportantInfoArrayProps={
  importantInfo: Array<string>
}

function ImportantInformation({importantInfo}:IImportantInfoArrayProps){

    return(
        <>
            {
                importantInfo !== undefined ?
                    <section className="m-5">
                        <Typography weight="extra-bold" size="18" variant="h3" className="mb-2.5">
                            Important information
                        </Typography>
                        <div>
                            <ul className={styles.ul}>
                                {
                                    importantInfo.map((listItem:string, index) => <li key={index}  className={styles.li}>
                                        <Typography type="content" weight="regular" size="14" variant="p" className="mb-4">
                                            {listItem}
                                        </Typography>
                                      </li>
                                    )
                                }
                            </ul>
                        </div>
                    </section>
                :
                <section/>
            }
        </>
    )
}
export default ImportantInformation