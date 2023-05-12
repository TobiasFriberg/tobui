import React, { useState } from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/button.example';
import { Button } from '../components/form';
import { List, ListItem } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Flex } from '../components/view/view.style';
import Icon from '@mdi/react';
import { mdiAccount, mdiLogin } from '@mdi/js';

export const ButtonView = () => {
  const description = `A button is a universal component, used in a lot of different cases. Return the promise function to have the button add a spinner while the function is running, to prevent calling for the function again.`;

  const example = (
    <List padding>
      <ListItem title="Regular buttons">
        <List padding>
          <Flex $gap="5px" $breakpoint="tablet">
            <Button onClick={() => {}}>Default button</Button>
            <Button appearance="border" onClick={() => {}}>
              Bordered default button
            </Button>
            <Button appearance="text" onClick={() => {}}>
              Text default button
            </Button>
            <Button size="small" onClick={() => {}}>
              Small default button
            </Button>
          </Flex>
          <Flex $gap="5px" $breakpoint="tablet">
            <Button variant="primary" onClick={() => {}}>
              Primary button
            </Button>
            <Button variant="primary" appearance="border" onClick={() => {}}>
              Bordered primary button
            </Button>
            <Button variant="primary" appearance="text" onClick={() => {}}>
              Text primary button
            </Button>
            <Button variant="primary" size="small" onClick={() => {}}>
              Small primary button
            </Button>
          </Flex>
          <Flex $gap="5px" $breakpoint="tablet">
            <Button variant="secondary" onClick={() => {}}>
              Secondary button
            </Button>
            <Button variant="secondary" appearance="border" onClick={() => {}}>
              Bordered secondary button
            </Button>
            <Button variant="secondary" appearance="text" onClick={() => {}}>
              Text secondary button
            </Button>
            <Button variant="secondary" size="small" onClick={() => {}}>
              Small secondary button
            </Button>
          </Flex>
          <Flex $gap="5px" $breakpoint="tablet">
            <Button variant="alternative" onClick={() => {}}>
              Alternative button
            </Button>
            <Button variant="alternative" appearance="border" onClick={() => {}}>
              Bordered alternative button
            </Button>
            <Button variant="alternative" appearance="text" onClick={() => {}}>
              Text alternative button
            </Button>
            <Button variant="alternative" size="small" onClick={() => {}}>
              Small alternative button
            </Button>
          </Flex>
          <Flex $gap="5px" $breakpoint="tablet">
            <Button onClick={() => {}} variant="gradient">
              Gradient button
            </Button>
            <Button appearance="border" variant="gradient" onClick={() => {}}>
              Bordered gradient button
            </Button>
            <Button appearance="text" variant="gradient" onClick={() => {}}>
              Text gradient button
            </Button>
            <Button size="small" variant="gradient" onClick={() => {}}>
              Small gradient button
            </Button>
          </Flex>
          <Flex $gap="5px" $breakpoint="tablet">
            <Button variant="danger" onClick={() => {}}>
              Danger button
            </Button>
            <Button variant="danger" appearance="border" onClick={() => {}}>
              Bordered danger button
            </Button>
            <Button variant="danger" appearance="text" onClick={() => {}}>
              Text danger button
            </Button>
            <Button variant="danger" size="small" onClick={() => {}}>
              Small danger button
            </Button>
          </Flex>
        </List>
      </ListItem>
      <ListItem title="Button variants">
        <List padding>
          <div>
            <Button
              variant="primary"
              icon={<Icon path={mdiLogin} />}
              onClick={() => {
                return new Promise<void>((resolve) => {
                  return setTimeout(() => {
                    resolve();
                  }, 2000);
                });
              }}
            >
              Login
            </Button>
          </div>
          <div>
            <Button variant="primary" disabled onClick={() => {}}>
              Disabled
            </Button>
          </div>
          <div>
            <Button variant="primary" loading onClick={() => {}}>
              Loading
            </Button>
          </div>
          <div>
            <Button variant="primary" icon={<Icon path={mdiAccount} />} iconOnly onClick={() => {}} />
          </div>
          <div>
            <Button
              variant="primary"
              size="large"
              icon={<Icon path={mdiAccount} size={1} />}
              iconOnly
              onClick={() => {}}
            />
          </div>
        </List>
      </ListItem>
    </List>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="onClick*">function</ListItem>
        <ListItem title="variant">
          &apos;primary&apos; | &apos;secondary&apos; | &apos;alternative&apos; | &apos;danger&apos;
        </ListItem>
        <ListItem title="className">string</ListItem>
        <ListItem title="appearance">&apos;button&apos; | &apos;text&apos; | &apos;border&apos;</ListItem>
        <ListItem title="size">&apos;small&apos; | &apos;medium&apos; | &apos;large&apos;</ListItem>
        <ListItem title="loading">boolean</ListItem>
        <ListItem title="disabled">boolean</ListItem>
        <ListItem title="icon">ReactElement</ListItem>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Buttons" description={description} example={example} code={txt} options={options} />
  );
};
