import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/dropdown.example';
import { List, ListItem } from '../components/list';
import { Dropdown } from '../components/dropdown';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';

export const DropdownView = () => {
  const description = `Dropdown can be placed on any element`;

  const getDropDownContent = () => <div>Content goes here...</div>;

  const example = (
    <Dropdown content={getDropDownContent()}>
      <div>Click me</div>
    </Dropdown>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="content*">Element</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <>
      <DocumentationTemplate title="Lists" description={description} example={example} code={txt} options={options} />
    </>
  );
};
