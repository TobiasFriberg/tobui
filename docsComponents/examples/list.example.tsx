import React from 'react';
import { List, ListItem } from '../../components/list';

export const ListExample = () => {
  return (
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
      <List padding lines>
        <ListItem title="Title1">Titled item 01</ListItem>
        <ListItem title="Title2">Titled item 02</ListItem>
        <ListItem title="Title3">Titled item 03</ListItem>
      </List>
    </List>
  );
};
