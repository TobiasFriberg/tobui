import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import { Button } from '../components/form';
import { useAppState } from '../docsComponents/appContext';

export const HomeView = () => {
  const [customTheme, setCustomTheme] = useState(localStorage.getItem('customTheme') || '');
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
    setAppState({ theme: {} });
  };

  return (
    <div>
      <AceEditor
        mode="json"
        theme="molokai"
        width="100%"
        value={customTheme}
        onChange={(editorValue) => onChange(editorValue)}
        editorProps={{ $blockScrolling: true }}
        tabSize={2}
      />
      <Button onClick={() => applyNewTheme()}>Apply theme</Button>
      <Button onClick={() => resetTheme()}>Reset theme</Button>
    </div>
  );
};
