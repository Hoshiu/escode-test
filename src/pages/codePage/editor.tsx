import { useState } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-clouds";
import 'ace-builds/src-noconflict/ext-language_tools';

const Editor = () => {
  const [code, setCode] = useState('');
  return (
    <AceEditor
      mode="javascript"
      theme="clouds"
      name="app_code_editor"
      fontSize={14}
      showPrintMargin
      showGutter
      onChange={(value) => {
        setCode(value)
      }}
      value={code}
      wrapEnabled
      highlightActiveLine 
      enableSnippets 
      style={{ width: "100%", height: "100%" }}
      setOptions={{
        enableBasicAutocompletion: true, 
        enableLiveAutocompletion: true, 
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
export default Editor;
