import React from 'react';
import { Tick } from 'tobui/tick';
import { Flex } from './tick.style';

export const TickExample = () => {
  return (
    <Flex $gap="10px">
      <Tick>Default</Tick>
      <Tick variant="primary">Primary</Tick>
      <Tick variant="secondary">Secondary</Tick>
      <Tick variant="alternative">Alternative</Tick>
      <Tick variant="danger">Danger</Tick>
      <Tick variant="success">Success</Tick>
      <Tick variant="warning">Warning</Tick>
      <Tick variant="info">Info</Tick>
    </Flex>
  );
};
