import React from 'react';
import { mount } from 'cypress/react';
import { Button } from '../index';
import { Home } from 'react-feather';

describe('Buttons', () => {
  it('should render a button', () => {
    mount(
      <Button onClick={() => {}}>A button</Button>
    );
    cy.get('button').contains('A button');
  });

  it('should render a disabled button', () => {
    mount(
      <Button onClick={() => {}} disabled>A button</Button>
    );
    cy.get('button').should('be.disabled');
  });

  it('should render a button with a loader', () => {
    mount(
      <Button onClick={() => {}} loading>A button</Button>
    );
    cy.get('button').find('[data-test-id="loader"]');
  });

  it('should render a button with an icon', () => {
    mount(
      <Button onClick={() => {}} icon={<Home />}>A button</Button>
    );
    cy.get('button').find('svg');
  });
});
