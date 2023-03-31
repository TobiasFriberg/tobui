import React from 'react';
import { GitHub, Package } from 'react-feather';
import { Flex } from '../components/view/view.style';
import { StyledFooter } from './style';

type Props = {};

export const Footer = ({}: Props) => {
  return (
    <StyledFooter>
      <Flex $verticalAlign="center" $gap="5px">
        <Package /> <div>npm i github:TobiasFriberg/tobui</div>
      </Flex>
      <Flex $verticalAlign="center" $gap="5px">
        <GitHub />
        <a target="_blank" href="https://github.com/TobiasFriberg/tobui">
          Fork me on GitHub
        </a>
      </Flex>
    </StyledFooter>
  );
};
