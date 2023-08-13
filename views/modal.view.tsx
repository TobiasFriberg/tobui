import React, { useState } from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/modal.example';
import { Button } from '../components/form';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Modal } from '../components/modal/modal';

export const ModalView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const description = `A modal is like a popup, only it covers the whole screen. and It's a blank sheet.`;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const example = (
    <>
      <div>
        <Button onClick={() => handleOpenModal()}>Open modal</Button>
      </div>
      <Modal fillContent open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        A modal
        <br />
        test
        <br />
        A modal
        <br />
        test
        <br />
        A modal
        <br />
        test
        <br />
        A modal
        <br />
        test
        <br />
        A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />A modal
        <br />
        test
        <br />
      </Modal>
    </>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="open*">boolean</ListItem>
        <ListItem title="fillContent">boolean</ListItem>
        <ListItem title="onOpen">function </ListItem>
        <ListItem title="onClose">function</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Modal" description={description} example={example} code={txt} options={options} />
  );
};
