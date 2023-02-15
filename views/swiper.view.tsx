import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/swiper.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Swiper } from '../components/swiper';
import { Card } from '../components/card';

export const SwiperView = () => {
  const description = `Swiper component`;

  const swiperItems = [<Card>card 1</Card>, <Card>card 2</Card>, <Card>card 3</Card>];
  const example = <Swiper views={swiperItems} loop />;

  const options = (
    <>
      <List padding lines>
        <ListItem title="views*">HTMLElement[]</ListItem>
        <ListItem title="step">number</ListItem>
        <ListItem title="loop">boolean</ListItem>
        <ListItem title="sensitivity">number</ListItem>
        <ListItem title="onSwiped">function</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Swiper" description={description} example={example} code={txt} options={options} />
  );
};
