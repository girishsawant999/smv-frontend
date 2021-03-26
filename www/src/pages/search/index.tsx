import SearchMain from 'components/containers/search';
import React from 'react';
import Head from 'components/common/Head';
import { fetchApi, APIResponseType } from 'api';
import { CountryObject, IInputDataProps } from 'components/containers/search/types';

export async function getServerSideProps() {
	try {
		const ressuggestedCountries: APIResponseType<IInputDataProps> = await fetchApi<IInputDataProps>(
			'api/v1/ums/countries/list?tags=SUGGESTED'
		);
		const suggestedCountries: Array<CountryObject> =
			(ressuggestedCountries.data && ressuggestedCountries.data.data) || [];

		const resmostPopularCountries: APIResponseType<IInputDataProps> = await fetchApi<IInputDataProps>(
			'api/v1/ums/countries/list?tags=MOST_POPULAR'
		);
		const mostPopularCountries: Array<CountryObject> =
			(resmostPopularCountries.data && resmostPopularCountries.data.data) ||
			[];

		return {
			props: {
				suggestedCountries,
				mostPopularCountries
			}
		};
	} catch (err) {
		return {
			props: {
				data: {}
			}
		};
	}
}

type IPropsType = {
	suggestedCountries: Array<CountryObject>;
	mostPopularCountries: Array<CountryObject>;
};

function Search(props: IPropsType) {
	return (
		<>
			<Head title="Search" desc="Search for various countries" />
			<SearchMain {...props} />;
		</>
	);
}

export default Search;
