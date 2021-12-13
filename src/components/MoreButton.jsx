import React, { useCallback, useContext } from 'react';
import resultAPI from '../services/marvelAPI';
import MarvelContext from '../context/MarvelContext';

import '../styles/more-button.css';

// Implementação do botão para carregar mais personagens

function MoreButton() {
  const {
    comics, setComics, filteredComics, disableMore, // setFilteredComics, inputSearch,
  } = useContext(MarvelContext);

  const handleMoreButton = useCallback(async () => {
    try {
      // const offset = (
      //   (filteredComics.length === 0)
      // );
      console.log(comics.length);

      const response = await resultAPI.get('/comics', {
        params: {
          offset: comics.length,
        },
      });

      setComics([...comics, ...response.data.data.results]);
      // else {
      //   setFilteredComics(
      //     [...filteredComics, ...response.data.data.results
      //       .filter(({ title }) => title.toUpperCase().includes(inputSearch.toUpperCase()))],
      //   );
      // }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }, [comics, filteredComics]);

  return (
    <div className="container-btn">
      <button
        className={disableMore ? 'more-btn-disable' : 'more-btn'}
        type="button"
        disabled={disableMore}
        onClick={handleMoreButton}
      >
        SEE MORE
      </button>
    </div>
  );
}

export default MoreButton;
