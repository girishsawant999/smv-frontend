import { APIResponseType, fetchApi } from 'api';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import SearchInput from './components/SearchInputComp';
import { CountryObject, IInputDataProps, IQueryObject, ISearchMain } from './types';

function SearchMain({ suggestedCountries, mostPopularCountries }: ISearchMain) {
	const [searchQuery, setsearchQuery] = useState<string>('');
	const [resultCountries, setResultCountries] = useState<Array<CountryObject>>([]);
	const router = useRouter();
	const query: IQueryObject = router.query;

	useEffect(() => {
		const _searchQuery = query.searchquery;
		if (_searchQuery) setsearchQuery(_searchQuery);
	}, [query.searchquery]);

	const getCountries = async (query: string) => {
		const resCountries: APIResponseType<IInputDataProps> = await fetchApi<IInputDataProps>(
			`api/v1/ums/countries/list?name=${query}`
		);
		const searchedCountries: Array<CountryObject> =
			(resCountries.data && resCountries.data.data) || [];
		setResultCountries(searchedCountries);
	};

	const debouncedSave = debounce(() => getCountries(searchQuery), 1000);

	useEffect(() => {
		if (searchQuery) {
			debouncedSave();
		} else {
			setResultCountries([]);
		}
	}, [searchQuery]);

	return (
		<>
			<SearchInput searchQuery={searchQuery} setsearchQuery={setsearchQuery} />
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
						<CountryList
							countries={resultCountries}
							isResultPage={true}
						/>
					</div>
				)
			)}
		</>
	);
}

export default SearchMain;
