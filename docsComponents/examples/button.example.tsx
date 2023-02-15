import React from 'react';
import { List, ListItem, Button } from 'tobui';

export const ButtonExample = () => {
  return (
    <List padding>
      <ListItem title="Regular buttons">
        <List padding>
          <div>
            <Button onClick={() => {}}>Default button</Button>
            <Button appearance="border" onClick={() => {}}>
              Bordered default button
            </Button>
            <Button appearance="text" onClick={() => {}}>
              Text default button
            </Button>
            <Button size="small" onClick={() => {}}>
              Small default button
            </Button>
          </div>
          <div>
            <Button variant="primary" onClick={() => {}}>
              Primary button
            </Button>
            <Button variant="primary" appearance="border" onClick={() => {}}>
              Bordered primary button
            </Button>
            <Button variant="primary" appearance="text" onClick={() => {}}>
              Text primary button
            </Button>
            <Button variant="primary" size="small" onClick={() => {}}>
              Small primary button
            </Button>
          </div>
          <div>
            <Button variant="secondary" onClick={() => {}}>
              Secondary button
            </Button>
            <Button variant="secondary" appearance="border" onClick={() => {}}>
              Bordered secondary button
            </Button>
            <Button variant="secondary" appearance="text" onClick={() => {}}>
              Text secondary button
            </Button>
            <Button variant="secondary" size="small" onClick={() => {}}>
              Small secondary button
            </Button>
          </div>
          <div>
            <Button variant="alternative" onClick={() => {}}>
              Alternative button
            </Button>
            <Button variant="alternative" appearance="border" onClick={() => {}}>
              Bordered alternative button
            </Button>
            <Button variant="alternative" appearance="text" onClick={() => {}}>
              Text alternative button
            </Button>
            <Button variant="alternative" size="small" onClick={() => {}}>
              Small alternative button
            </Button>
          </div>
          <div>
            <Button onClick={() => {}} variant="gradient">
              Gradient button
            </Button>
            <Button appearance="border" variant="gradient" onClick={() => {}}>
              Bordered gradient button
            </Button>
            <Button appearance="text" variant="gradient" onClick={() => {}}>
              Text gradient button
            </Button>
            <Button size="small" variant="gradient" onClick={() => {}}>
              Small gradient button
            </Button>
          </div>
          <div>
            <Button variant="danger" onClick={() => {}}>
              Danger button
            </Button>
            <Button variant="danger" appearance="border" onClick={() => {}}>
              Bordered danger button
            </Button>
            <Button variant="danger" appearance="text" onClick={() => {}}>
              Text danger button
            </Button>
            <Button variant="danger" size="small" onClick={() => {}}>
              Small danger button
            </Button>
          </div>
        </List>
      </ListItem>
    </List>
  );
};
