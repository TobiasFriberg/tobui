import React, { useState } from 'react';
import { Button } from '../../components/form';
import { Modal } from '../../components/modal/modal';

export const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <Button onClick={() => handleOpenModal()}>Open modal</Button>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        A modal
      </Modal>
    </>
  );
};
