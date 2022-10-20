import { Section } from '../components/view';
import React, { ReactNode } from 'react';
import { CodeEditor } from './codeeditor';

type Props = {
  title: string;
  description: string;
  example: ReactNode;
  code?: string;
  options?: ReactNode;
};

export const DocumentationTemplate = ({ title, description, example, code, options }: Props) => {
  const renderCode = () => {
    if (!code) {
      return null;
    }

    return (
      <>
        <h3>Code</h3>
        <CodeEditor onChange={() => {}} readonly code={code} />
      </>
    );
  };

  const renderArguments = () => {
    if (!options) {
      return null;
    }

    return (
      <>
        <h3>Arguments / Props</h3>
        <div>{options || null}</div>
      </>
    );
  };
  return (
    <Section>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>Example</h3>
      <Section>{example}</Section>
      {renderCode()}
      {renderArguments()}
    </Section>
  );
};
