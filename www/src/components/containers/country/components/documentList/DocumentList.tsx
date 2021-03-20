import React, { useEffect, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../../../pages/country';
import Typography from '../../../../common/Typography';
import styles from './documentList.module.css';

type IDocumentListArrayProps={
  documentList: Array<string>
}

function DocumentList({ documentList }:IDocumentListArrayProps){

    return(
        <>
            {
                documentList !== undefined ?
                    <section className="m-5">
                        <Typography weight="extra-bold" size="18" variant="h3" className="mb-2.5">
                            Document List
                        </Typography>
                        <div>
                            <ul className={styles.ul}>
                                {
                                    documentList.map((listItem:string, index) => <li key={index} className={styles.li}>
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
                    <section></section>
            }
        </>
    )
}

export default DocumentList