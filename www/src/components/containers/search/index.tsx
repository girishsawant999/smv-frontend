import { fetchApi } from 'api';
import React, { useState } from 'react';
import CountryList from './components/CountryList';
import SearchInput from './components/SearchInputComp';
import { CountryObject, ISearchMain } from './types';

function SearchMain({ suggestedCountries, mostPopularCountries }: ISearchMain) {
  const [searchQuery, setsearchQuery] = useState<string>('');
  const [resultCountries, setResultCountries] = useState<Array<CountryObject>>([]);

  const getCountries = async (query: string) => {
    const resCountries = await fetchApi(`api/v1/ums/countries/list?name=${query}`);
    if (resCountries && !resCountries.error && resCountries.response) {
      let { response } = resCountries;
      setResultCountries((response && response.data) || []);
    }
  };

  const onSearchQueryChange = (event: { target: HTMLInputElement }) => {
    const value = event.target.value;
    if (value) getCountries(value);
    else setResultCountries([]);
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
        resultCountries &&
        Array.isArray(resultCountries) &&
        resultCountries.length > 0 && (
          <div>
            <CountryList countries={resultCountries} isResultPage={true} />
          </div>
        )
      )}
    </>
  );
}

export default SearchMain;
