import React, { useState } from 'react';
CountryPage.propTypes = {};
import AllPacks from './components/allPacks/AllPacks';
import AddonService from './components/addonService/AddonService';
import ImportantInformation from './components/importantInformation/ImportantInformation';
import DocumentList from './components/documentList/DocumentList';
import AdditionalDocList from './components/additionalDocList/AdditionalDocList';
import FAQ from './components/faq/FAQ';
import CountryInfo from './components/countryInfo/CountryInfo';
import CountryImage from './components/countryImage/CountryImage';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../../../pages/country';
import Button from "../../common/Button";
import styles from "./country.module.css";

function CountryPage({ data }:InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [selectedPack, setSelectedPack] = useState(0);
    const [addonPacks, setAddonPacks] = useState([]);

    return (
        <div className="flex flex-col">

            {/*Header image section*/}
            <CountryImage/>

            {/*Introduction of country*/}
            <CountryInfo countryInfo={data.data.countryInfo}/>

            {/*all pack information*/}
            <AllPacks
                packsInfo={data.data.packsInfo}
                selectedPack={selectedPack}
                setSelectedPack={setSelectedPack}
            />

            {/*Addon information*/}
            <AddonService
                addonService={data.data.addonService}
                addonPacks={addonPacks}
                setAddonPacks={setAddonPacks}
            />

            {/*Important information section*/}
            <ImportantInformation importantInfo={data.data.importantInfo}/>

            {/*Document list section*/}
            <DocumentList documentList={data.data.documentList}/>

            {/*Additional doc list*/}
            <AdditionalDocList additionalDocList={data.data.additionalDocList}/>

            {/*FAQ section*/}
            <FAQ faq={data.data.faq}/>

            {/*Start button*/}
            <div className={""}>
                <Button
                    onClick={()=>{console.log(selectedPack); console.log(addonPacks)}}
                    type="submit">
                        Start my visa process
                </Button>
            </div>
        </div>
    );
}

export default CountryPage;