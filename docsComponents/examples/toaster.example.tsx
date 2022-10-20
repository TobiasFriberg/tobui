import React from 'react';
import { AddToaster } from '../../components/toaster';
import { List } from '../../components/list';
import { Button } from '../../components/form';

export const ToasterExample = () => {
  return (
    <List padding>
      <div>
        <Button onClick={() => AddToaster({ text: 'Look a toaster' })}>Show toaster</Button>
      </div>
      <div>
        <Button onClick={() => AddToaster({ text: 'You need to manually remove me', variant: 'info', sticky: true })}>
          Show sticky toaster
        </Button>
      </div>
    </List>
  );
};
