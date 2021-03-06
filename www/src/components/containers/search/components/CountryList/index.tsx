import Img from 'components/common/img';
import Typography from 'components/common/Typography';
import React from 'react';

type CountryObject = {
  imageUrl: Array<string>;
  title: string;
  description: string;
};

type ICountryList = {
  title?: string;
  isResultPage?: Boolean;
  countries: Array<CountryObject>;
};

function CountryList({ title = '', countries, isResultPage = false }: ICountryList) {
  return (
    <div className="ml-5 py-2">
      {title && (
        <Typography type="heading2" variant="h2">
          {title}
        </Typography>
      )}
      <div
        className={'flex flex-col my-5 '.concat(
          isResultPage ? '' : 'max-h-96 flex-wrap overflow-x-auto '
        )}>
        {countries.map((country, index) => {
          return (
            <div key={index} className=" flex items-center w-64 my-3 mx-2">
              <Img
                srcSet={country.imageUrl}
                isFromAssets={false}
                placeHolderBg={'#f5f4f5'}
                alt="city"
                width="72px"
                height="89px"
                className="rounded-2xl"
              />
              <div className="ml-4">
                <Typography type="heading3" variant="h2">
                  {country.title}
                </Typography>
                <Typography type="subHeading5" variant="p">
                  {country.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;
