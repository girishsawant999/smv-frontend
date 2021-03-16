import React from 'react';
import BackButton from 'components/common/backButton';
import Styles from './searchInput.module.css';

type ISearchInput = {
  setsearchQuery: (searchQuery: string) => void;
  searchQuery: string;
};

function SearchInput({ searchQuery, setsearchQuery }: ISearchInput) {
  const onChange = (event: { target: HTMLInputElement }) => {
    setsearchQuery(event.target.value);
  };

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
          className={Styles.searchInput.concat(
            ' px-10 outline-none w-full'
          )}
          onChange={onChange}
        />
        {searchQuery && (
          <span
            onClick={() => setsearchQuery('')}
            className="absolute right-1 underline font-manrope-extra-bold text-sm">
            clear
          </span>
        )}
      </form>
    </div>
  );
}

export default SearchInput;
