import React from "react";
import { Input, Button } from "antd";
import "./registerStyle.scss";

const Question1 = props => {
  return (
    <div className="question1">
      <p>Where do you teach?</p>

      <Input
        name="school"
        onChange={e => props.changeSchool(e)}
        value={props.input}
      />
      <div className="register-page-nav">
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

export default Question1;
