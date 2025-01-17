import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/dropdown.example';
import { List, ListItem } from '../components/list';
import { Dropdown } from '../components/dropdown';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';

export const DropdownView = () => {
  const description = `Dropdown can be placed on any element`;

  const getDropDownContent = () => <div style={{ padding: '20px' }}>Any content can go inside</div>;

  const example = (
    <List padding>
      <Dropdown position="up" content={getDropDownContent()}>
        <div>Up</div>
      </Dropdown>
      <Dropdown position="down" content={getDropDownContent()}>
        <div>Down</div>
      </Dropdown>
      <Dropdown position="left" content={getDropDownContent()}>
        <div>Left</div>
      </Dropdown>
      <Dropdown position="right" content={getDropDownContent()}>
        <div>Right</div>
      </Dropdown>
      <Dropdown mobileModal content={getDropDownContent()}>
        <div>Dropdown that turns into a modal in mobile-view</div>
      </Dropdown>
    </List>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="content*">Element</ListItem>
        <ListItem title="position">'left' | 'right' | 'up' | 'down'</ListItem>
        <ListItem title="mobileModal">boolean</ListItem>
        <ListItem title="open">boolean</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <>
      <DocumentationTemplate
        title="Dropdowns"
        description={description}
        example={example}
        code={txt}
        options={options}
      />
    </>
  );
};
