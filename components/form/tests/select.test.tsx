import React from 'react';
import { mount } from 'cypress/react';
import { Select } from '..';

describe('Select', () => {
  it('should render a select field', () => {
    mount(
      <Select onChange={() => {}} label="A label" items={[]} />
    );
    cy.get('[data-test-id="select"]').contains('A label');
  });
});
