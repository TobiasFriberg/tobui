import React from 'react';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { CodeEditor } from '../docsComponents/codeeditor';
import theme from '../components/theme.json';
import { List, ListItem } from '../components/list';

export const ThemeView = () => {
  const description = `To use the theme and get the global styling, use the ThemeProvider from tobui.`;

  const setupCode = `import { ThemeProvider } from 'tobui';

const App = () => {
  const myTheme = {}; // my theme object, override any variables.
  const appMode = true; // force styling to be app
  return (
    <ThemeProvider app={appMode} customTheme={myTheme}>
      {/*Import routing or your entry point here*/}
    </ThemeProvider>
  );
};

export default App;
`;

  const options = (
    <>
      <List padding lines>
        <div>children*</div>
        <ListItem title="customTheme">object</ListItem>
        <ListItem title="app">boolean</ListItem>
      </List>
      <div>* = required</div>
    </>
  );

  const example = (
    <>
      <CodeEditor onChange={() => {}} readonly code={setupCode} />
    </>
  );

  return (
    <>
      <DocumentationTemplate title="Theme/styling" description={description} example={example} options={options} />
      <h4>Icons</h4>
      <p>
        For icons, tobUI uses mdi, you can find all the icons here{' '}
        <a href="https://materialdesignicons.com" target="_blank">
          materialdesignicons.com
        </a>
      </p>
    </>
  );
};
