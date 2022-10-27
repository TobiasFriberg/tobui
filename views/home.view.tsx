import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import { Button } from '../components/form';
import { useAppState } from '../docsComponents/appContext';

let defaultCustomTheme = `{
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

export const HomeView = () => {
  const [customTheme, setCustomTheme] = useState(localStorage.getItem('customTheme') || defaultCustomTheme);
  const { setAppState } = useAppState();

  const onChange = (editorValue: string) => {
    setCustomTheme(editorValue);
  };

  const applyNewTheme = () => {
    localStorage.setItem('customTheme', customTheme);
    setAppState({ theme: JSON.parse(customTheme) });
  };

  const resetTheme = () => {
    localStorage.removeItem('customTheme');
    setCustomTheme(defaultCustomTheme);
  };

  return (
    <div>
      <AceEditor
        mode="json"
        theme="monokai"
        width="100%"
        value={customTheme}
        onChange={(editorValue) => onChange(editorValue)}
        editorProps={{ $blockScrolling: true }}
        tabSize={2}
      />
      <br />
      <Button onClick={() => applyNewTheme()}>Apply theme</Button>
      <Button onClick={() => resetTheme()}>Reset theme</Button>
    </div>
  );
};
