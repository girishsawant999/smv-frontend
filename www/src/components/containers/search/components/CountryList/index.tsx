import Img from 'components/common/img';
import Typography from 'components/common/Typography';
import React from 'react';
import { ICountryList } from '../../types';

function CountryList({ title = '', countries, isResultPage = false }: ICountryList) {
  return (
    <div className="ml-5 py-2">
      {title && (
        <Typography type="heading" variant="h2" size="18" weight="extra-bold">
          {title}
        </Typography>
      )}
      <div
        className={'flex flex-col my-5 '.concat(
          isResultPage ? '' : 'max-h-96 flex-wrap overflow-x-auto '
        )}>
        {countries &&
          Array.isArray(countries) &&
          countries.map((country, index) => {
            return (
              <div key={index} className=" flex items-center w-64 my-3 mx-2">
                <Img
                  srcSet={country.image_url}
                  placeHolderBg={'#f5f4f5'}
                  alt="city"
                  className="rounded-2xl w-17.5"
                />
                <div className="ml-4">
                  <Typography
                    type="content"
                    variant="h2"
                    size="16"
                    weight="semi-bold">
                    {country.name}
                  </Typography>
                  <Typography type="content" variant="p" size="14" weight="regular">
                    {country.processing_time_in_days}
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
