import React from "react";

interface SearchBarProps {
  searchQuery: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, handleChange }) => {
  return (
    <input
      type="text"
      className="mb-10 h-10 w-1/2 rounded-2xl bg-amber-50 pl-3"
      placeholder="Search your favorite songs"
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
