import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imageNotFound from '../images/not_found.jpg';
import ComicsModal from './ComicsModal';

import '../styles/comic-card.css';

function ComicCard({
  id, title, path, extension,
}) {
  const [selected, setSelected] = useState(false);
  const [disableSelect, setDisableSelect] = useState(false);
  const [disableRemove, setDisableRemove] = useState(true);

  const handleSelect = () => {
    setSelected(true);
    setDisableSelect(true);
    setDisableRemove(false);
  };

  const handleRemove = () => {
    setSelected(false);
    setDisableRemove(true);
    setDisableSelect(false);
  };

  return (
    <div
      key={id}
      className="info-card"
    >
      <div className="card">
        <div>
          <h2 className="name-card">{title}</h2>
          <p className={selected ? 'select' : 'no-select'}>Comic selected !</p>
          <img
            className="img-card"
            // Colocar uma imagem diferente quando for uma imagem não avaliada
            src={path.includes('image_not_available') ? imageNotFound : `${path}.${extension}`}
            alt={title}
          />
        </div>
        <div>
          <button
            type="button"
            disabled={disableSelect}
            onClick={handleSelect}
          >
            Select
          </button>
          <button
            type="button"
            disabled={disableRemove}
            onClick={handleRemove}
          >
            Remove
          </button>
          <ComicsModal />
          {/* Onde não houver descrição, mostrar uma mensagem personalizada */}
          {/* <p className="description">
            {description !== '' ? description : 'No description!!!'}</p> */}
        </div>
      </div>
    </div>
  );
}

ComicCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
};

export default ComicCard;
