import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-tsx';
import 'ace-builds/src-noconflict/theme-monokai';

type Props = {
  onChange?: (value: string) => void;
  readonly?: boolean;
  code: string;
};

export const CodeEditor = ({ onChange, readonly = false, code }: Props) => {
  return (
    <div>
      <AceEditor
        mode="tsx"
        readOnly={readonly}
        theme="monokai"
        width="100%"
        showPrintMargin={false}
        maxLines={Infinity}
        value={code}
        onChange={(editorValue) => (onChange ? onChange(editorValue) : {})}
        tabSize={2}
      />
      <br />
    </div>
  );
};
