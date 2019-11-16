import React from "react";
import { Card, Button } from "antd";
import { Row, Col } from "reactstrap";

const SignUpPromptUserType = props => {
  return (
    <div>
      <Row>
        <Col sm="12" md="6" lg="6">
          <Button onClick={props.handleSignUpSubmit("Teacher")}>
            <Card.Meta title="Teacher" />
          </Button>
        </Col>
        <Col sm="12" md="6" lg="6">
          <Button onClick={props.handleSignUpSubmit("Student")}>
            <Card.Meta title="Student" />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpPromptUserType;
