import React, { useState } from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/popup.example';
import { List, ListItem } from '../components/list';
import { Button } from '../components/form';
import { Popup } from '../components/popup';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';

export const PopupView = () => {
  const [isExamplePopupOpen, setIsExamplePopupOpen] = useState(false);
  const [isExamplePopupOpen2, setIsExamplePopupOpen2] = useState(false);
  const [isExamplePopupOpen3, setIsExamplePopupOpen3] = useState(false);
  const description = `Use popup if you want to present some information that the user should see or maybe something to interact with.`;

  const customButtons = [
    <Button onClick={() => {}}>Button 01</Button>,
    <Button variant="secondary" onClick={() => {}}>
      Button 02
    </Button>,
  ];

  const example = (
    <>
      <List padding>
        <div>
          <Button onClick={() => setIsExamplePopupOpen(true)}>Open closable</Button>
        </div>
        <div>
          <Button onClick={() => setIsExamplePopupOpen2(true)}>Open non-closable</Button>
        </div>
        <div>
          <Button onClick={() => setIsExamplePopupOpen3(true)}>Open popup with custom buttons</Button>
        </div>
      </List>
      <Popup title="Closable" closeText=":)" open={isExamplePopupOpen} onClose={() => setIsExamplePopupOpen(false)}>
        This popup can be closed by default.
      </Popup>
      <Popup title="Non-closable" open={isExamplePopupOpen2}>
        This popup can only be closed by a state update from the user.
        <br />
        <h3 onClick={() => setIsExamplePopupOpen2(false)}>Click HERE to close</h3>
      </Popup>
      <Popup
        title="Custom buttons"
        open={isExamplePopupOpen3}
        onClose={() => setIsExamplePopupOpen3(false)}
        buttons={customButtons}
      >
        This popup has a bunch of customized buttons at the bottom.
      </Popup>
    </>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="open*">boolean</ListItem>
        <ListItem title="title">string</ListItem>
        <ListItem title="closeText">string</ListItem>
        <ListItem title="onOpen">function</ListItem>
        <ListItem title="onClose">function</ListItem>
        <ListItem title="buttons">Buttons[]</ListItem>
        <ListItem title="width">string</ListItem>
        <ListItem title="fullscreen">boolean</ListItem>
        <ListItem title="name**">string</ListItem>
      </List>
      <div>* = required</div>
      <div>** = experimental</div>
    </>
  );

  return (
    <DocumentationTemplate title="Popups" description={description} example={example} code={txt} options={options} />
  );
};
