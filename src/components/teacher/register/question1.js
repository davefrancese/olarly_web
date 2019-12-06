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

const Question1 = props => {
  return (
    <div className="question1">
      <p>Where do you teach?</p>
      <Input
        name="school"
        onChange={e => props.changeSchool(e)}
        value={props.input}
      />
      {renderNext(props)}
    </div>
  );
};

export default Question1;
