import SearchMain from 'components/containers/search';
import React from 'react';
import { fetchApi } from 'api';
import { CountryObject } from 'components/containers/search/types';

export async function getServerSideProps() {
  const resSuggested = await fetchApi('api/v1/ums/countries/list?tags=SUGGESTED');
  const resMostPopular = await fetchApi(
    'api/v1/ums/countries/list?tags=MOST_POPULAR'
  );
  let suggestedCountries = [];
  if (resSuggested && !resSuggested.error && resSuggested.response) {
    let { response } = resSuggested;
    suggestedCountries = (response && response.data) || [];
  }
  let mostPopularCountries = [];
  if (resMostPopular && !resMostPopular.error && resMostPopular.response) {
    let { response } = resMostPopular;
    mostPopularCountries = (response && response.data) || [];
  }
  return {
    props: {
      suggestedCountries,
      mostPopularCountries
    }
  };
}
type IPropsType = {
  suggestedCountries: Array<CountryObject>;
  mostPopularCountries: Array<CountryObject>;
};

function Search(props: IPropsType) {
  return <SearchMain {...props} />;
}

export default Search;
