import React, { useState } from 'react';
import CountryList from './components/CountryList';
import SearchInput from './components/SearchInputComp';
import SearchResultCountryList from './components/SearchResultCountryList';

const countries = [
  {
    imageUrl: 'https://source.unsplash.com/72x89/?portugal',
    title: 'Portugal',
    description: '5-6 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?Russia',
    title: 'Russia',
    description: '7-8 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?Japan',
    title: 'Japan',
    description: '7-8 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?NewYork',
    title: 'NewYork',
    description: '4-6 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?Switzerland',
    title: 'Switzerland',
    description: '10-12 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?Russia',
    title: 'Russia',
    description: '7-8 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?NewYork',
    title: 'NewYork',
    description: '4-6 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?portugal',
    title: 'Portugal',
    description: '5-6 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?Russia',
    title: 'Russia',
    description: '7-8 working days'
  },
  {
    imageUrl: 'https://source.unsplash.com/72x89/?NewYork',
    title: 'NewYork',
    description: '4-6 working days'
  }
];

type CountryObject = {
  imageUrl: string;
  title: string;
  description: string;
};
type ISearchMain = {
  countries?: Array<CountryObject>;
};

function SearchMain({}: ISearchMain) {
  const [searchQuery, setsearchQuery] = useState<string>('');

  return (
    <>
      <SearchInput searchQuery={searchQuery} setsearchQuery={setsearchQuery} />
      {!searchQuery ? (
        <div className="mt-8">
          <CountryList title={'Suggested countries'} countries={countries} />
          <CountryList
            title={'Highly popular this time of the year'}
            countries={countries}
          />
        </div>
      ) : (
        <div className="">
          <SearchResultCountryList countries={countries} />
        </div>
      )}
    </>
  );
}

export default SearchMain;
