import React, { useState } from 'react';
import { Button, Modal } from 'tobui';

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
