import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/slider.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Slider } from '../components/form';

export const SliderView = () => {
  const description = `Slider component`;

  const example = <Slider label="testlabel" max={400} showValue />;

  const options = (
    <>
      <List padding lines>
        <ListItem title="label">string</ListItem>
        <ListItem title="min">number</ListItem>
        <ListItem title="max">number</ListItem>
        <ListItem title="showPercent">boolean</ListItem>
        <ListItem title="showValue">boolean</ListItem>
        <ListItem title="onChange">function</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Slider" description={description} example={example} code={txt} options={options} />
  );
};
