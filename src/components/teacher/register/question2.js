import React from "react";
import { Input, Button } from "antd";
import "./registerStyle.scss";

const renderNext = props => {
  if (props.input === "") {
    return (
      <Button
        onClick={() => props.pageUp()}
        type="primary"
        htmlType="button"
        className="register-next-btn"
        disabled
      >
        Next
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => props.pageUp()}
        type="primary"
        htmlType="button"
        className="register-next-btn"
      >
        Next
      </Button>
    );
  }
};

const Question2 = props => {
  return (
    <div className="question2">
      <p>What class do you teach?</p>
      <Input onChange={e => props.changeClass(e)} value={props.input} />

      <div className="register-page-nav">
        <Button onClick={() => props.pageDown()} className="register-next-btn">
          Back
        </Button>
        {renderNext(props)}
      </div>
    </div>
  );
};

export default Question2;
