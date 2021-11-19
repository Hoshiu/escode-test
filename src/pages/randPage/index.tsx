import React, { useState, useEffect } from "react";
import "../../styles/code.css";
import AddMarkdown from "./addMarkdown";
import Editor from "./editor";
import '../listOperate'
import { getList } from "../listOperate";
import { Link } from "react-router-dom";

interface dataList {
  Id: Number,
  Name: String,
  Description: String
}

const RandPage = () => {
  const [questions, setQuestions] = useState({} as dataList)
  useEffect(() => {
    (async () => {
      const list =  await getList()
      const randomIndex = Math.floor(Math.random() * list.length);
      // console.log(randomIndex)
      setQuestions(list[randomIndex])
    })()
  },[])

  return (
    <div className="body-content">
      <div className="left-content">
        <div className="TabHeaderContainer">
          <Link className="TabHeaderContent" to="/game">题目列表</Link>
          <div className="TabHeaderContent">题目描述</div>
          <Link className="TabHeaderContent" to="/">返回</Link>
        </div>
        <div className="textContext">
          <div className="TextArea">
            <div className="TextTopArea">
              <p style={{ display: "inline-block" }}>{questions.Id}</p>
              <p style={{ display: "inline-block", paddingLeft: ".7rem" }}>
                {questions.Name}
              </p>
            </div>
            <AddMarkdown descrption={questions.Description} />
          </div>
        </div>
        <button className="left-bottom" onClick={() =>window.location.reload()}>更换题目</button>
      </div>
      <div className="scroll-col"></div>
      <div className="right-content">
        <Editor/>
        <button className="right-button">
          <span style={{marginLeft: '2rem'}}>提交</span>
        </button>
      </div>
    </div>
  );
};

export default RandPage;



