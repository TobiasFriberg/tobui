import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/stepper.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Stepper } from '../components/stepper';

export const StepperView = () => {
  const description = `Stepper component`;

  const example = <Stepper steps={[<div>Hello</div>, <div>world</div>, <div>!</div>]} fillContent />;

  const options = (
    <>
      <List padding lines>
        <ListItem title="steps*">Element[]</ListItem>
        <ListItem title="loop">boolean</ListItem>
        <ListItem title="step">number</ListItem>
        <ListItem title="fillContent">boolean</ListItem>
        <ListItem title="hideArrows">boolean</ListItem>
        <ListItem title="indicatorNavigation">boolean</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Stepper" description={description} example={example} code={txt} options={options} />
  );
};
