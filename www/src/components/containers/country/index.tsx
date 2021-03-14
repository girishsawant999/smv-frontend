import React from 'react';
CountryPage.propTypes = {};
import AllPacks from './AllPacks';
import AddonService from './AddonService';
import ImportantInformation from './ImportantInformation';
import DocumentList from './DocumentList';
import AdditionalDocList from './AdditionalDocList';
import FAQ from './FAQ';
import CountryInfo from './CountryInfo';
import CountryImage from './CountryImage';

function CountryPage({ data }:any) {
    return (
        <div className="main-div flex-col">

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