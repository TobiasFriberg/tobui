import React from 'react';
import { mount } from 'cypress/react';
import { SearchField } from '..';

describe('Search field', () => {
  it('should render a search field', () => {
    mount(
      <SearchField handleSearch={() => {}} />
    );
    cy.get('[data-test-id="search"]').find('*[class^="icon"]');
  });

  it('should render a clear icon', () => {
    mount(
      <SearchField handleSearch={() => {}} value="test"  onClear={() => {}} />
    );
    cy.get('[data-test-id="search"]').find('*[class^="iconClear"]');
  });

  it('should clear value', () => {
    mount(
      <SearchField handleSearch={() => {}} value="test"  onClear={() => {}} />
    );
    const clearButton = cy.get('[data-test-id="search"]').find('*[class^="iconClear"]');

    clearButton.click();
    cy.get('[data-test-id="search"]').find('*[class^="iconClear"]').should('not.exist');
  });
});
