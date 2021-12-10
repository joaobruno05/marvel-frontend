import React, { useCallback, useContext } from 'react';
import resultAPI from '../services/marvelAPI';
import MarvelContext from '../context/MarvelContext';

import '../styles/more-button.css';

// Implementação do botão para carregar mais personagens

function MoreButton() {
  const {
    characters, setCharacters, filteredCharacters, setFilteredCharacters, inputSearch,
  } = useContext(MarvelContext);

  const handleMoreButton = useCallback(async () => {
    try {
      const offset = (
        (filteredCharacters.length === 0) ? (characters.length) : (filteredCharacters.length)
      );
      console.log(filteredCharacters);

      const response = await resultAPI.get('/characters', {
        params: {
          offset,
        },
      });

      if (filteredCharacters.length === 0) {
        setCharacters([...characters, ...response.data.data.results]);
      } else {
        setFilteredCharacters(
          [...filteredCharacters, ...response.data.data.results
            .filter(({ name }) => name.toUpperCase().includes(inputSearch.toUpperCase()))],
        );
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }, [characters, filteredCharacters]);

  return (
    <div className="container-btn">
      <button
        className="btn more-btn"
        type="button"
        onClick={handleMoreButton}
      >
        SEE MORE
      </button>
    </div>
  );
}

export default MoreButton;
