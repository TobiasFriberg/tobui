import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/toaster.example';
import { List, ListItem } from '../components/list';
import { Button } from '../components/form';
import { AddToaster } from '../components/toaster';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';

export const ToasterView = () => {
  const description = `A toaster can be pushed over every other elements to notify the user of something.
        The toaster is a function that you may call wherever you like in your code and takes an object as an argument.`;

  const example = (
    <List padding>
      <div>
        <Button onClick={() => AddToaster({ text: 'Look a toaster' })}>Show toaster</Button>
      </div>
      <div>
        <Button
          onClick={() =>
            AddToaster({
              text: 'You need to manually remove me',
              variant: 'info',
              position: 'top',
              sticky: true,
            })
          }
        >
          Show sticky toaster
        </Button>
      </div>
    </List>
  );

  const options = (
    <>
      <List padding lines>
        <ListItem title="text*">string</ListItem>
        <ListItem title="size">'small' | 'medium' | 'large'</ListItem>
        <ListItem title="variant">
          &apos;error&apos; | &apos;success&apos; | &apos;info&apos; | &apos;primary&apos; | &apos;secondary&apos;
        </ListItem>
        <ListItem title="sticky">boolean</ListItem>
        <ListItem title="timeout">number</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Toasters" description={description} example={example} code={txt} options={options} />
  );
};
