import React, { useContext } from 'react';
import Loading from '../components/Loading';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ComicsNotFound from '../components/ComicsNotFound';
import ComicsCard from '../components/ComicsCard';
import MoreButton from '../components/MoreButton';
import MarvelContext from '../context/MarvelContext';
import Footer from '../components/Footer';

import '../styles/home.css';

function Home() {
  const {
    comics, filteredComics, status, inputSearch, setDisableMore,
  } = useContext(MarvelContext);

  // Renderizar na tela de acordo com a filtragem ou não dos personagens
  const getComics = () => {
    if (inputSearch.length === 0) {
      setDisableMore(false);
      return comics;
    }
    setDisableMore(true);
    return filteredComics;
  };

  // console.log(comics);
  // console.log(filteredComics);

  // Mostrar a tela de "Loading" enquanto espera o retorno da requisição da API
  if (status === 'loading') return (<Loading />);

  return (
    <div>
      <Header />
      <div className="div-title">
        <h1 className="title">Comics</h1>
      </div>
      <SearchBar />
      <div className="characters-block">
        <div className="container">
          {/* Se existir filtro aplicado ou não,
            os personagens são renderizados normalmente */}
          { (filteredComics.length !== 0) ? getComics().map(({
            id, title, description, thumbnail: { path, extension },
          }) => (
            <ComicsCard
              id={id}
              title={title}
              description={description}
              path={path}
              extension={extension}
              // comics={comics}
            />
            // Caso o personagem que o usuário pesquisou não exista,
            // mostra-se uma mensagem personalizada
          )) : <ComicsNotFound /> }
        </div>
      </div>
      <MoreButton />
      <Footer />
    </div>
  );
}

export default Home;
