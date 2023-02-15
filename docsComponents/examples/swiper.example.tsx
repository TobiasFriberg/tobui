import React from 'react';
import { Card, Swiper } from 'tobui';

export const SwiperExample = () => {
  const swiperItems = [<Card>card 1</Card>, <Card>card 2</Card>, <Card>card 3</Card>];
  return (
    <Swiper views={swiperItems} loop />;
  );
};
