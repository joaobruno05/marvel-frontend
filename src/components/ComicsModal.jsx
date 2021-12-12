import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import MarvelContext from '../context/MarvelContext';

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

function ComicsModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { comics } = useContext(MarvelContext);

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
        {comics.map(({ description }) => (
          <div>
            <p>{description}</p>
            <button type="button" onClick={handleCloseModal}>close</button>
          </div>
        ))}
      </Modal>
    </div>
  );
}

export default ComicsModal;
