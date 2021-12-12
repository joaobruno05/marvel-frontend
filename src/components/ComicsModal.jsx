import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
// import MarvelContext from '../context/MarvelContext';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ComicsModal({ description }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const { comics } = useContext(MarvelContext);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
      >
        Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <p>{description}</p>
        <button type="button" onClick={handleCloseModal}>close</button>
      </Modal>
    </div>
  );
}

ComicsModal.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ComicsModal;
