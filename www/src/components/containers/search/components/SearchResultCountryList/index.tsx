import Img from 'components/common/img';
import Typography from 'components/common/Typography';
import React from 'react';

type CountryObject = {
  imageUrl: string;
  title: string;
  description: string;
};

type ISearchResultCountryList = {
  countries: Array<CountryObject>;
};

function SearchResultCountryList({ countries }: ISearchResultCountryList) {
  return (
    <div className="ml-5 py-2">
      <div className="flex flex-col my-5 ">
        {countries.map((country, index) => {
          return (
            <div key={index} className=" flex items-center w-64 my-3 mx-2">
              <Img
                srcSet={country.imageUrl}
                alt="city"
                width="72px"
                height="89px"
                className="rounded-2xl"
              />
              <div className="ml-4">
                <Typography type="subHeading4" variant="h4" bold={true}>
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

export default SearchResultCountryList;
