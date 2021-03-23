import { fetchApi } from 'api';
import React, { useState } from 'react';
import CountryList from './components/CountryList';
import SearchInput from './components/SearchInputComp';
import { CountryObject, ISearchMain } from './types';

function SearchMain({ suggestedCountries, mostPopularCountries }: ISearchMain) {
  const [searchQuery, setsearchQuery] = useState<string>('');
  const [resultCountries, setResultCountries] = useState<Array<CountryObject>>([]);

  const getCountries = async (query: string) => {
    console.log('resultCountries :>> ', resultCountries);
    try {
      const resCountries = await fetchApi(`api/v1/ums/countries/list?name=${query}`);
      if (resCountries && !resCountries.error && resCountries.response) {
        let { response } = resCountries;
        setResultCountries((response && response.data) || []);
      }
    } catch (err) {
      console.log('err :>> ', err);
    }
  };

  const onSearchQueryChange = (event: { target: HTMLInputElement }) => {
    const value = event.target.value;
    if (value) getCountries(value);
    setsearchQuery(value);
  };

  return (
    <>
      <SearchInput
        onSearchQueryChange={onSearchQueryChange}
        searchQuery={searchQuery}
        setsearchQuery={setsearchQuery}
      />
      {!searchQuery ? (
        <div className="mt-8">
          <CountryList
            title={'Suggested countries'}
            countries={suggestedCountries}
          />
          <CountryList
            title={'Highly popular this time of the year'}
            countries={mostPopularCountries}
          />
        </div>
      ) : (
        mostPopularCountries && (
          <div>
            <CountryList countries={mostPopularCountries} isResultPage={true} />
          </div>
        )
      )}
    </>
  );
}

export default SearchMain;
