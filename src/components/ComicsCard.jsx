import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imageNotFound from '../images/not_found.jpg';
import ComicsModal from './ComicsModal';

import '../styles/comic-card.css';

function ComicCard({
  id, title, path, extension, description,
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
    <div key={id} className="info-card">
      <div className="card">
        <div>
          <h3 className="name-card">{title}</h3>
          {/* Mostrar uma mensagem personalizada ao selecionar o quadrinho */}
          <p className={selected ? 'select' : 'no-select'}>Comic selected</p>
          <img
            className="img-card"
            // Colocar uma imagem diferente quando for uma imagem não avaliada
            src={path.includes('image_not_available') ? imageNotFound : `${path}.${extension}`}
            alt={title}
          />
        </div>
        <div className="div-select-remove">
          <button
            type="button"
            className="select-btn"
            disabled={disableSelect}
            onClick={handleSelect}
          >
            <i className="fas fa-plus-circle"> Select</i>
          </button>
          <button
            type="button"
            className="remove-btn"
            disabled={disableRemove}
            onClick={handleRemove}
          >
            <i className="fas fa-trash-alt"> Remove</i>
          </button>
        </div>
        <div>
          <ComicsModal
            title={title}
            path={path}
            extension={extension}
            description={description}
          />
        </div>
      </div>
    </div>
  );
}

ComicCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
};

export default ComicCard;
