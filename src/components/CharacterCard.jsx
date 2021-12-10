import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imageNotFound from '../images/not_found.jpg';

import '../styles/character-card.css';

function CharacterCard({
  id, name, description, path, extension,
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      key={id}
      // Mostrar a descrição do personagem ao ser clicado
      className={clicked ? 'new-info-card' : 'info-card'}
    >
      <button
        className="btn-card"
        type="button"
        onClick={() => setClicked(!clicked)}
      >
        <div className="card">
          <div>
            <h2 className="name-card">{name}</h2>
            <img
              className="img-card"
              // Colocar uma imagem diferente quando for uma imagem não avaliada
              src={path.includes('image_not_available') ? imageNotFound : `${path}.${extension}`}
              alt={name}
            />
          </div>
          <div>
            {/* Onde não houver descrição, mostrar uma mensagem personalizada */}
            <p className="description">{description !== '' ? description : 'No description!!!'}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
};

export default CharacterCard;
