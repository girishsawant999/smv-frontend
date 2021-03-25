import BackButton from 'components/common/backButton';
import Typography from 'components/common/Typography';
import React from 'react';
import Styles from './searchInput.module.css';

type ISearchInput = {
  setsearchQuery: (searchQuery: string) => void;
  searchQuery: string;
};

function SearchInput({ searchQuery, setsearchQuery }: ISearchInput) {
  const onChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) =>
    setsearchQuery(e.target.value);

  const onSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsearchQuery(e.target.search.value);
  };
  return (
    <div className="flex py-4 px-5 items-center w-full sticky bg-white top-0 transition-all">
      <BackButton onClick={() => null} className="static" />
      <form onSubmit={onSearchSubmit} className="w-full px-4 relative">
        <label hidden>Search</label>
        <input
          type="text"
          placeholder="I am looking for a visa to…"
          name="search"
          id="search-input"
          value={searchQuery}
          className={Styles.searchInput.concat(' h-6 outline-none w-full')}
          onChange={onChangeSearchQuery}
        />
        {searchQuery && (
          <button
            onClick={() => setsearchQuery('')}
            className="absolute h-6 right-0 top-0 focus:outline-none">
            <Typography
              type="content"
              variant="span"
              size="14"
              weight="extra-bold"
              className="underline text-black">
              Clear
            </Typography>
          </button>
        )}
      </form>
    </div>
  );
}

export default SearchInput;
