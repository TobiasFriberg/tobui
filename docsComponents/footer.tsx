import React from 'react';
import { Flex } from '../components/view/view.style';
import { StyledFooter } from './style';
import Icon from '@mdi/react';
import { mdiGithub, mdiPackage } from '@mdi/js';

type Props = {};

export const Footer = ({}: Props) => {
  return (
    <StyledFooter>
      <Flex $verticalAlign="center" $gap="5px">
        <Icon path={mdiPackage} size={1} /> <div>npm i github:TobiasFriberg/tobui</div>
      </Flex>
      <Flex $verticalAlign="center" $gap="5px">
        <Icon path={mdiGithub} size={1} />
        <a target="_blank" href="https://github.com/TobiasFriberg/tobui">
          Fork me on GitHub
        </a>
      </Flex>
    </StyledFooter>
  );
};
