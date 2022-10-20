import React from 'react';
import { mount } from 'cypress/react';
import { InputField } from '../inputfield';
import { Home } from 'react-feather';

describe('Input field', () => {
  it('should render an input field', () => {
    mount(
      <InputField onChange={() => {}} value="" label="A label" />
    );
    cy.get('[data-test-id="input"]').contains('A label');
  });

  it('should render an input field with an icon', () => {
    mount(
      <InputField onChange={() => {}} value="" icon={<Home />} label="A label" />
    );
    cy.get('[data-test-id="input"]').find('svg');
  });

  it('should render an input field with error class', () => {
    mount(
      <InputField onChange={() => {}} value="" validator={() => false} label="A label" />
    );
    cy.get('[data-test-id="input"]').find('*[class^="invalid"]');
  });
});
