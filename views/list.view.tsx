import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/list.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';

export const ListView = () => {
  const description = `List are a really useful for aligning stuff, and ofc listing items.`;

  const example = (
    <List padding>
      <List>
        <span>Regular item 01</span>
        <span>Regular item 02</span>
        <span>Regular item 03</span>
      </List>
      <List padding>
        <span>Padded item 01</span>
        <span>Padded item 02</span>
        <span>Padded item 03</span>
      </List>
      <List padding lines>
        <span>Padded with lines item 01</span>
        <span>Padded with lines item 02</span>
        <span>Padded with lines item 03</span>
      </List>
    </List>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="padding">boolean</ListItem>
        <ListItem title="lines">boolean</ListItem>
        <ListItem title="className">string</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  const descriptionItem = `List item are a component that adds a title, easy mode.`;

  const exampleItem = (
    <List padding lines>
      <ListItem title="Title1">Titled item 01</ListItem>
      <ListItem title="Title2">Titled item 02</ListItem>
      <ListItem title="Title3">Titled item 03</ListItem>
    </List>
  );

  const optionsItem = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="title">string</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <>
      <DocumentationTemplate title="Lists" description={description} example={example} code={txt} options={options} />
      <hr />
      <DocumentationTemplate
        title="List items"
        description={descriptionItem}
        example={exampleItem}
        code="See code above"
        options={optionsItem}
      />
    </>
  );
};
