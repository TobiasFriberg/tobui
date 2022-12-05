import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import { Button } from '../components/form';
import { useAppState } from '../docsComponents/appContext';
import theme from '../components/theme.json';

let defaultCustomTheme = JSON.stringify(theme, null, 2);

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
