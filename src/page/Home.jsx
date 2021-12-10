import React, { useContext } from 'react';
// import Loading from '../components/Loading';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CharactersNotFound from '../components/CharacterNotFound';
import CharacterCard from '../components/CharacterCard';
import MoreButton from '../components/MoreButton';
import MarvelContext from '../context/MarvelContext';
import Footer from '../components/Footer';

import '../styles/home.css';

function Home() {
  const {
    characters, filteredCharacters, filteredData,
  } = useContext(MarvelContext);

  // Renderizar na tela de acordo com a filtragem ou não dos personagens
  const getCharacters = () => {
    if (filteredCharacters.length === 0) {
      return characters;
    }
    return filteredCharacters;
  };

  // Mostrar a tela de "Loading" enquanto espera o retorno da requisição da API
  // if (status === 'loading') return (<Loading />);

  return (
    <div>
      <Header />
      <div className="div-title">
        <h1 className="title">Characters</h1>
      </div>
      <SearchBar />
      <div className="characters-block">
        <div className="container">
          {/* Se existir ou não tiver nenhum filtro aplicado,
            os personagens são renderizados normalmente */}
          { filteredData().length !== 0 ? getCharacters().map(({
            id, name, description, thumbnail: { path, extension },
          }) => (
            <CharacterCard
              id={id}
              name={name}
              description={description}
              path={path}
              extension={extension}
            />
            // Caso o personagem que o usuário pesquisou não exista,
            // mostra-se uma mensagem personalizada
          )) : <CharactersNotFound /> }
        </div>
      </div>
      <MoreButton />
      <Footer />
    </div>
  );
}

export default Home;
