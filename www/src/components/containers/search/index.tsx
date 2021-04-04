import { APIResponseType, fetchApi } from 'api';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import SearchInput from './components/SearchInputComp';
import { CountryObject, IInputDataProps, IQueryObject, ISearchMain } from './types';
import useDebounce from 'helpers/useDebounce';

function SearchMain({ suggestedCountries, mostPopularCountries }: ISearchMain) {
	const router = useRouter();
	const query: IQueryObject = router.query;
	const [searchQuery, setsearchQuery] = useState<string>(
		query.searchquery ? query.searchquery : ''
	);
	const debouncedSearchQuery = useDebounce<string>(searchQuery, 1000);
	const [resultCountries, setResultCountries] = useState<Array<CountryObject>>([]);

	const getCountries = async (query: string) => {
		try {
			const resCountries: APIResponseType<IInputDataProps> = await fetchApi<IInputDataProps>(
				`api/v1/ums/countries/list?name=${query}`
			);
			const searchedCountries: Array<CountryObject> =
				(resCountries.data && resCountries.data.data) || [];
			setResultCountries(searchedCountries);
		} catch (err) {
			setResultCountries([]);
		}
	};

	useEffect(() => {
		if (debouncedSearchQuery) {
			getCountries(debouncedSearchQuery);
		} else {
			setResultCountries([]);
		}
	}, [debouncedSearchQuery]);

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
