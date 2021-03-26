import React, { useState } from 'react';
import AllPacks from './components/allPacks/AllPacks';
import AddonService from './components/addonService/AddonService';
import ImportantInformation from './components/importantInformation/ImportantInformation';
import DocumentList from './components/documentList/DocumentList';
import AdditionalDocList from './components/additionalDocList/AdditionalDocList';
import FAQ from './components/faq/FAQ';
import CountryInfo from './components/countryInfo/CountryInfo';
import CountryImage from './components/countryImage/CountryImage';
import Button from '../../common/Button';
import { IInputDataProps } from './types';
import MoreOptions from './components/moreOptions/MoreOptions';

CountryPage.propTypes = {};

type ICountryInfoProps = {
  countryInfo: IInputDataProps;
};

function CountryPage({ countryInfo }: ICountryInfoProps) {
  const [selectedPack, setSelectedPack] = useState(0);
  const [addonPacks, setAddonPacks] = useState([]);

  return (
    <div className="flex flex-col md:max-w-md md:mx-auto relative">
      <form>
        {/*Header image section*/}
        <CountryImage />

        {/*Introduction of country*/}
        <CountryInfo countryInfo={countryInfo.data.countryInfo} />

        {/*customizing options for travel*/}
        {true ? <MoreOptions moreOptions={countryInfo.data.moreOptions} /> : <></>}

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
        <ImportantInformation importantInfo={countryInfo.data.importantInfo} />

        {/*Document list section*/}
        <DocumentList documentList={countryInfo.data.documentList} />

        {/*Additional doc list*/}
        <AdditionalDocList additionalDocList={countryInfo.data.additionalDocList} />

        {/*FAQ section*/}
        <FAQ faq={countryInfo.data.faq} />

        {/*Start button*/}
        <div className={'flex w-full justify-center mb-5'}>
          <Button
            onClick={() => {
              console.log(selectedPack);
              console.log(addonPacks);
            }}
            className={''}
            type="submit">
            Start my visa process
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CountryPage;
