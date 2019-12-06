import React from "react";
import { Input, Button } from "antd";
import "./registerStyle.scss";

const Question3 = props => {
  return (
    <div className="question3">
      <p>What subject do you teach?</p>
      <Input onChange={e => props.changeSubject(e)} value={props.input} />

      <div className="register-page-nav">
        <Button onClick={() => props.pageDown()} className="register-next-btn">
          Back
        </Button>
        <Button
          onClick={() => props.pageUp()}
          type="primary"
          htmlType="button"
          className="register-next-btn"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Question3;
