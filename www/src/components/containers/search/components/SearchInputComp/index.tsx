import React from 'react';
import BackButton from 'components/common/backButton';
import Styles from './searchInput.module.css';
import Typography from 'components/common/Typography';

type ISearchInput = {
  setsearchQuery: (searchQuery: string) => void;
  searchQuery: string;
  onSearchQueryChange: (event: { target: HTMLInputElement }) => void;
};

function SearchInput({
  searchQuery,
  setsearchQuery,
  onSearchQueryChange
}: ISearchInput) {
  return (
    <div className="flex py-4 px-5 items-center w-full sticky bg-white top-0 transition-all">
      <BackButton onClick={() => null} className="static" />
      <form action="" className="w-full relative">
        <input
          type="text"
          placeholder="I am looking for a visa to…"
          name="search"
          id="search-input"
          value={searchQuery}
          className={Styles.searchInput.concat(' px-10 outline-none w-full')}
          onChange={onSearchQueryChange}
        />
        {searchQuery && (
          <button
            onClick={() => setsearchQuery('')}
            className="absolute right-1 focus:outline-none">
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
