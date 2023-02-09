import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/tick.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Tick } from '../components/tick';
import { Flex } from '../components/view/view.style';

export const TickView = () => {
  const description = `ticks..`;

  const example = (
    <Flex $gap="10px">
      <Tick>Default</Tick>
      <Tick variant="primary">Primary</Tick>
      <Tick variant="secondary">Secondary</Tick>
      <Tick variant="alternative">Alternative</Tick>
      <Tick variant="danger">Danger</Tick>
      <Tick variant="success">Success</Tick>
      <Tick variant="warning">Warning</Tick>
      <Tick variant="info">Info</Tick>
    </Flex>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="variant">
          'primary' | 'secondary' | 'alternative' | 'danger' | 'success' | 'warning' | 'info'
        </ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Ticks" description={description} example={example} code={txt} options={options} />
  );
};
