export type CountryObject = {
	currency: string;
	currency_symbol: string;
	processing_time_in_days: string;
	image_url: Array<string>;
	tags: Array<string>;
	is_deleted: boolean;
	updated_at: string;
	_id: string;
	name: string;
	symbol: string;
	created_at: string;
};
export type IInputDataProps = {
	success: boolean;
	data: Array<CountryObject>;
};
export type ISearchMain = {
	suggestedCountries: Array<CountryObject>;
	mostPopularCountries: Array<CountryObject>;
};

export type ICountryList = {
	title?: string;
	isResultPage?: boolean;
	countries: Array<CountryObject>;
};
export type IQueryObject = {
	searchquery?: string;
};
