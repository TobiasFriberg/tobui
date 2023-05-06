import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/card.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Card } from '../components/card';

export const CardView = () => {
  const description = `Cards can be used to highlight content, with or without image.`;

  const example = (
    <Card wrap padding image={<img src="https://via.placeholder.com/250" />}>
      Hello
    </Card>
  );

  const options = (
    <>
      <List padding lines>
        <div>children</div>
        <ListItem title="wrap">boolean</ListItem>
        <ListItem title="maxHeight">number</ListItem>
        <ListItem title="padding">boolean</ListItem>
        <ListItem title="image">HTMLElement</ListItem>
        <ListItem title="imagePlacement">'top' | 'bottom' | 'left' | 'right';</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Cards" description={description} example={example} code={txt} options={options} />
  );
};
