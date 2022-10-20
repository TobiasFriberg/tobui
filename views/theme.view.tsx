import React from 'react';
import { DocumentationTemplate } from '../docsComponents/documentationtemplate';
import { CodeEditor } from '../docsComponents/codeeditor';

export const ThemeView = () => {
  const description = `To use the theme and get the global styling, like font en helper css-classes, use the ThemeProvider and GlobalStyle from tobui.`;

  const test = `import { ThemeProvider, GlobalStyle } from 'tobui';
import { createGlobalStyle } from 'styled-components';

${'const GlobalStyling = createGlobalStyle`${GlobalStyle}`;'}
const App = () => {
  const myTheme = {}; // my theme object, override any variables.
  return (
    <ThemeProvider customTheme={myTheme}>
      <GlobalStyles /> 
      {/*Import routing or your entry point here*/}
    </ThemeProvider>
  );
};

export default App;
`;

  const test2 = `{
  "colors": {
    "primary": "#902785",
    "secondary": "#ed6b2f",
    "alternative": "#073b4c",

    "textColorDark": "#303030",
    "textColorLight": "#fafafa",

    "backgroundColor": "#faf9f9",

    "grayLightEvenMore": "#eeeeee",
    "grayLightMore": "#e0e0e0",
    "grayLight": "#bdbdbd",
    "gray": "#9e9e9e",
    "grayDark": "#757575",
    "grayDarkMore": "#424242",
    "grayDarkEvenMore": "#212121",

    "notificationError": "#e53935",
    "notificationWarning": "#ffb300",
    "notificationInfo": "#0277bd",
    "notificationSuccess": "#558b2f"
  },
  "roundness": "4px",
  "buttonRoundness": "24px",
  "inputRoundness": "8px",
  "fontSize": "14px"
}`;

  const test3 = `
/*Utils*/
<div className="tui-pointer" /> // cursor pointer

/*Texts*/
<div className="tui-textCenter" /> // center text
<div className="tui-textFaded" /> // faded text
<div className="tui-textLight" /> // light text
<div className="tui-textLightFaded" /> // light faded text
<div className="tui-textDark" /> // dark text
<div className="tui-textDarkFaded" /> // dark faded text

<div className="tui-textSizeSmall" /> // small text
<div className="tui-textSizeLarge" /> // large text
`;

  const example = (
    <>
      <CodeEditor onChange={() => {}} readonly code={test} />
      <h4>Theme variables</h4>
      <CodeEditor onChange={() => {}} readonly code={test2} />
      <h4>Classes</h4>
      <CodeEditor onChange={() => {}} readonly code={test3} />
    </>
  );

  return <DocumentationTemplate title="Theme/styling" description={description} example={example} />;
};
