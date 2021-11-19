import React, { useState } from 'react';
import { Result, Button } from 'antd';

function Modal(step: Number) {
  const [showElem, SetShowElem] = useState(0)
  let Message
  if (step == 1) {
    Message = (
      <Result 
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
    )
} else if(step == 2){
    Message = (
      <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    ></Result>
    )
}
  return (
    <div>{Message}</div>
  );
}

export default Modal;

