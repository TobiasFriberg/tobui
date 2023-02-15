import React, { useState } from 'react';
import { List, Button, Popup } from 'tobui';

export const PopupExample = () => {
  const [isExamplePopupOpen, setIsExamplePopupOpen] = useState(false);
  const [isExamplePopupOpen2, setIsExamplePopupOpen2] = useState(false);
  const [isExamplePopupOpen3, setIsExamplePopupOpen3] = useState(false);

  const customButtons = [
    <Button onClick={() => {}}>Button 01</Button>,
    <Button variant="secondary" onClick={() => {}}>
      Button 02
    </Button>,
  ];

  return (
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
};
