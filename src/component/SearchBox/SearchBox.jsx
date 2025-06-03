import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBox.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="turing311@gmail.com"
        className="search-input"
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
