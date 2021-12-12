import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import resultAPI from '../services/marvelAPI';
import MarvelContext from './MarvelContext';

function MarvelProvider({ children }) {
  const [comics, setComics] = useState([]);
  const [filteredComics, setFilteredComics] = useState([]);
  const [status, setStatus] = useState('loading');
  const [inputSearch, setInputSearch] = useState('');

  // Requisição da API para utilizar na página "Home", renderizando na hora da montagem da tela
  useEffect(() => {
    const showComics = async () => {
      try {
        const { data } = await resultAPI.get('/comics');
        setStatus('OK');
        setComics(data.data.results);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };

    showComics();
  }, []);

  const filteredData = () => comics
    .filter(({ title }) => title.toUpperCase().includes(inputSearch.toUpperCase()));

  // Personagens filtrados e atualizados a cada pesquisa do usuário
  useEffect(() => {
    const showFilteredComics = () => {
      setFilteredComics(filteredData());
    };
    showFilteredComics();
  }, [inputSearch]);

  const context = useMemo(() => ({
    comics,
    setComics,
    filteredComics,
    setFilteredComics,
    filteredData,
    status,
    setStatus,
    inputSearch,
    setInputSearch,
  }));

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
