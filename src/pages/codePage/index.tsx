import React from "react";
import "../../styles/code.css";
import AddMarkdown from "./addMarkdown";
import Editor from "./editor";

const CodePage = () => {
  const questions = {
    id: 1,
    name: "手写一个Max函数",
    descrption: `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

1. Lists
* [ ] todo
* [x] done
    
A table:

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

`,
  };
  return (
    <div className="body-content">
      <div className="left-content">
        <div className="TabHeaderContainer">
          <div className="TabHeaderContent">题目列表</div>
          <div className="TabHeaderContent">题目描述</div>
          <div className="TabHeaderContent">提交记录</div>
        </div>
        <div className="textContext">
          <div className="TextArea">
            <div className="TextTopArea">
              <p style={{ display: "inline-block" }}>{questions.id}</p>
              <p style={{ display: "inline-block", paddingLeft: ".7rem" }}>
                {questions.name}
              </p>
            </div>
            <AddMarkdown descrption={questions.descrption} />
          </div>
        </div>
      </div>
      <div className="scroll-col"></div>
      <div className="right-content">
        <Editor/>
      </div>
    </div>
  );
};

export default CodePage;
