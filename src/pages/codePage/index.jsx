import React from 'react';
import './code.css'
import AddMarkdown from './AddMarkdown';

const CodePage = () => {
  // const questions = axios.get(...)
  const questions = {
    "id":1,
    "name":"手写一个Max函数",
    "descrption":`A paragraph with *emphasis* and **strong importance**.

    > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    `,
  }
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
              <p style={{display: 'inline-block'}}>{ questions.id }</p>
              <p style={{display: 'inline-block', paddingLeft: '.7rem'}}>{questions.name }</p>
            </div>
            <AddMarkdown descrption={questions.descrption} />
          </div>
        </div>
      </div>
      <div className="scroll-col"></div>
      <div className="right-content">
        <textarea style={{ marginLeft: '2rem', marginTop: '2rem', height: '90%', width: '90%' }}></textarea>
      </div>
    </div>
  );
}

export default CodePage;
