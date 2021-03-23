export type CountryObject = {
  currency: String;
  currency_symbol: String;
  processing_time_in_days: String;
  image_url: Array<string>;
  tags: Array<String>;
  is_deleted: Boolean;
  updated_at: String;
  _id: String;
  name: String;
  symbol: String;
  created_at: String;
};

export type ISearchMain = {
  suggestedCountries: Array<CountryObject>;
  mostPopularCountries: Array<CountryObject>;
};

export type ICountryList = {
  title?: string;
  isResultPage?: Boolean;
  countries: Array<CountryObject>;
};
