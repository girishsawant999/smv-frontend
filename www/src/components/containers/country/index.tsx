import React from 'react';
CountryPage.propTypes = {};
import AllPacks from './allPacks/AllPacks';
import AddonService from './addonService/AddonService';
import ImportantInformation from './importantInformation/ImportantInformation';
import DocumentList from './documentList/DocumentList';
import AdditionalDocList from './additionalDocList/AdditionalDocList';
import FAQ from './faq/FAQ';
import CountryInfo from './countryInfo/CountryInfo';
import CountryImage from './countryImage/CountryImage';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../pages/country';
import Button from "../../common/Button";
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
            <div className="flex justify-center m-5">
                <Button onClick={()=>{}} className="justify-center">Start my visa process</Button>
            </div>
        </div>
    );
}

export default CountryPage;