import React, { useContext } from 'react';
import MarvelContext from '../context/MarvelContext';

import '../styles/searchbar.css';

function SearchBar() {
  const { inputSearch, setInputSearch } = useContext(MarvelContext);

  return (
    <section>
      <div className="searchbar">
        <input
          type="text"
          name="character"
          value={inputSearch}
          id="character"
          placeholder="Comics Search"
          onChange={({ target }) => setInputSearch(target.value)}
        />
      </div>
    </section>
  );
}

export default SearchBar;
