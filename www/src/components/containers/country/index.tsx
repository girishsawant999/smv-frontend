import React from 'react';
CountryPage.propTypes = {};
import AllPacks from './AllPacks';
import AddonService from './AddonService';
import ImportantInformation from './ImportantInformation';
import DocumentList from './DocumentList';
import AdditionalDocList from './additionalDocList/AdditionalDocList';
import FAQ from './FAQ';
import CountryInfo from './CountryInfo';
import CountryImage from './CountryImage';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../pages/country';
import ImageList from './processDisplay/ProcessDisplay';

function CountryPage({ data }:InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="main-div flex-col">

            {/*<ImageList/>*/}

            {/*Header image section*/}
            <CountryImage/>

            {/*Introduction of country*/}
            <CountryInfo data={data}/>

            {/*all pack information*/}
            <AllPacks data={data}/>

            {/*Addon information*/}
            <AddonService data={data}/>

            {/*Important information section*/}
            <ImportantInformation data={data}/>

            {/*Document list section*/}
            <DocumentList data={data}/>

            {/*Additional doc list*/}
            <AdditionalDocList data={data}/>

            {/*FAQ section*/}
            <FAQ/>

            {/*Start button*/}
            <div className="start-process-btn m-5">
                <button className="">Start my visa process</button>
            </div>
        </div>
    );
}

export default CountryPage;