import React from 'react';
// @ts-ignore
import txt from '../docsComponents/examples/view.example';
import { List } from '../components/list';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { Section } from '../components/view';

export const ViewView = () => {
  const description = `The view will automatically grow and have scrollbars when needed. This component is typically used at highest level example in App or router-file, as a wrapper. Sections are used when we need a gap in contents.`;

  const example = (
    <>
      <Section>This is a section</Section>
      <Section>This is another section</Section>
    </>
  );

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
      </List>
      <span>* = required</span>
    </>
  );

  return (
    <DocumentationTemplate title="Views" description={description} example={example} code={txt} options={options} />
  );
};
