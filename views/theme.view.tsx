import React from 'react';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { CodeEditor } from '../docsComponents/codeeditor';
import theme from '../components/theme.json';

export const ThemeView = () => {
  const description = `To use the theme and get the global styling, use the ThemeProvider from tobui.`;

  const setupCode = `import { ThemeProvider } from 'tobui';

const App = () => {
  const myTheme = {}; // my theme object, override any variables.
  return (
    <ThemeProvider customTheme={myTheme}>
      {/*Import routing or your entry point here*/}
    </ThemeProvider>
  );
};

export default App;
`;

  const example = (
    <>
      <CodeEditor onChange={() => {}} readonly code={setupCode} />
      <h4>Theme variables</h4>
      <CodeEditor onChange={() => {}} readonly code={JSON.stringify(theme, null, 2)} />
    </>
  );

  return <DocumentationTemplate title="Theme/styling" description={description} example={example} />;
};
