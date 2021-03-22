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
import Button from "../../common/Button";
import type IInputDataProps from "../../../pages/country/index"

type IPackInfo={
    id: number;
    days: string;
    price: string;
    oldPrice: string;
    description: string;
}
type IAddonService={
    id: number;
    info: string;
    detail: string;
    price: string;
    oldPrice: string;
    description: string;
}
type IAdditionalDoc={
    condition: string;
    list: Array<string>;
}
type IFaq = {
    question: string;
    answer: string;
}
type IInputDataProps ={
    success: boolean;
    data: {
        countryInfo: {
            name: string;
            processingTime: string;
            description: string;
        };
        packsInfo: Array<IPackInfo>;
        addonService: Array<IAddonService>;
        importantInfo: Array<string>;
        documentList: Array<string>;
        additionalDocList: Array<IAdditionalDoc>;
        faq: Array<IFaq>;
  }
}
type ICountryInfoProps= {
    countryInfo: IInputDataProps
}

function CountryPage({ countryInfo }:ICountryInfoProps) {

    const [selectedPack, setSelectedPack] = useState(0);
    const [addonPacks, setAddonPacks] = useState([]);

    return (
        <div className="flex flex-col">

            {/*Header image section*/}
            <CountryImage/>

            {/*Introduction of country*/}
            <CountryInfo countryInfo={countryInfo.data.countryInfo}/>

            {/*all pack information*/}
            <AllPacks
                packsInfo={countryInfo.data.packsInfo}
                selectedPack={selectedPack}
                setSelectedPack={setSelectedPack}
            />

            {/*Addon information*/}
            <AddonService
                addonService={countryInfo.data.addonService}
                addonPacks={addonPacks}
                setAddonPacks={setAddonPacks}
            />

            {/*Important information section*/}
            <ImportantInformation importantInfo={countryInfo.data.importantInfo}/>

            {/*Document list section*/}
            <DocumentList documentList={countryInfo.data.documentList}/>

            {/*Additional doc list*/}
            <AdditionalDocList additionalDocList={countryInfo.data.additionalDocList}/>

            {/*FAQ section*/}
            <FAQ faq={countryInfo.data.faq}/>

            {/*Start button*/}
            <div className={"flex w-full justify-center"}>
                <Button
                    onClick={()=>{console.log(selectedPack); console.log(addonPacks)}}
                    className={""}
                    type="submit">
                        Start my visa process
                </Button>
            </div>
        </div>
    );
}

export default CountryPage;