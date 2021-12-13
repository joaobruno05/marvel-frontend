import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import imageNotFound from '../images/not_found.jpg';

import '../styles/comics-modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ComicsModal({
  title, path, extension, description,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="div-details">
      <button
        type="button"
        className="details-btn"
        onClick={handleOpenModal}
      >
        Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <div className="modal">
          <div className="div-close-modal">
            <button
              type="button"
              className="close-modal"
              onClick={handleCloseModal}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="info-modal">
            <h2 className="title-modal">{title}</h2>
            <div className="div-img-modal">
              <img
                className="img-modal"
                src={path.includes('image_not_available') ? imageNotFound : `${path}.${extension}`}
                alt={title}
              />
            </div>
            <h3 className="title-description">Description:</h3>
            {/* Onde não houver descrição, mostrar uma mensagem personalizada e
            renderizar com estilos diferentes */}
            <p className={description ? 'description' : 'no-description'}>
              {description !== '' ? description : 'No description!!!'}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

ComicsModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
};

export default ComicsModal;
