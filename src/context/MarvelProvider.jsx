import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import resultAPI from '../services/marvelAPI';
import MarvelContext from './MarvelContext';

function MarvelProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [status, setStatus] = useState('loading');
  const [inputSearch, setInputSearch] = useState('');

  // Requisição da API para utilizar na página "Home", renderizando na hora da montagem da tela
  useEffect(() => {
    const showCharacters = async () => {
      try {
        const { data } = await resultAPI.get('/characters');
        setStatus('OK');
        setCharacters(data.data.results);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    showCharacters();
  }, []);

  const filteredData = () => characters
    .filter(({ name }) => name.toUpperCase().includes(inputSearch.toUpperCase()));

  // Personagens filtrados e atualizados a cada pesquisa do usuário
  useEffect(() => {
    const showFilteredCharacters = () => {
      setFilteredCharacters(filteredData());
    };
    showFilteredCharacters();
  }, [inputSearch, filteredData]);

  const context = useMemo(() => ({
    characters,
    setCharacters,
    filteredCharacters,
    setFilteredCharacters,
    filteredData,
    status,
    setStatus,
    inputSearch,
    setInputSearch,
  }), [characters, filteredCharacters, filteredData, inputSearch, status]);

  return (
    <MarvelContext.Provider value={context}>
      {children}
    </MarvelContext.Provider>
  );
}

MarvelProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MarvelProvider;
