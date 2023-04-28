import React, { useState } from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/swiper.example';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Swiper } from '../components/swiper';
import { Card } from '../components/card';
import { Button } from '../components/form';

export const SwiperView = () => {
  const description = `Swiper component`;
  const [swipe, setSwipe] = useState<'right' | 'left' | null>(null);

  const swiperItems = [
    <Card>
      card 1<Button onClick={() => setSwipe('right')}>test</Button>
    </Card>,
    <Card>card 2</Card>,
    <Card>card 3</Card>,
  ];
  const example = <Swiper views={swiperItems} loop shouldSwipe={swipe} onSwiped={(e) => setSwipe(null)} />;

  const options = (
    <>
      <List padding lines>
        <ListItem title="views*">HTMLElement[]</ListItem>
        <ListItem title="step">number</ListItem>
        <ListItem title="loop">boolean</ListItem>
        <ListItem title="sensitivity">number</ListItem>
        <ListItem title="onSwiped">function(e)</ListItem>
        <ListItem title="shouldSwipe">right | left</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Swiper" description={description} example={example} code={txt} options={options} />
  );
};
