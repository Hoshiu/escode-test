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
      highlightActiveLine //突出活动线
      enableSnippets //启用代码段
      style={{ width: "100%", height: "100%" }}
      setOptions={{
        enableBasicAutocompletion: true, //启用基本自动完成功能
        enableLiveAutocompletion: true, //启用实时自动完成功能 （比如：智能代码提示）
        enableSnippets: true, //启用代码段
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
export default Editor;
