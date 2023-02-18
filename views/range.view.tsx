import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/slider.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Range } from '../components/form';

export const RangeView = () => {
  const description = `Range component`;

  const example = <Range label="testlabel" max={200} showValue />;

  const options = (
    <>
      <List padding lines>
        <ListItem title="label">string</ListItem>
        <ListItem title="min">number</ListItem>
        <ListItem title="max">number</ListItem>
        <ListItem title="showPercent">boolean</ListItem>
        <ListItem title="showValue">boolean</ListItem>
        <ListItem title="units">string</ListItem>
        <ListItem title="onChange">function</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Range" description={description} example={example} code={txt} options={options} />
  );
};
