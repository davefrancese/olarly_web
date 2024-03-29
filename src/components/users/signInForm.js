import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "../style/signInForm.scss";

const SignInForm = props => {
  console.log("signInForm", props);
  return (
    <Form className="sign-in-form">
      <Form.Item>
        <Input
          onChange={props.handleSignInChange(props.user_credentials.email)}
          prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
          name="email"
          value={props.user_credentials.email}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={props.handleSignInChange(props.user_credentials.password)}
          prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
          name="password"
          value={props.user_credentials.password}
          placeholder="Password"
        />
      </Form.Item>

      <Button onClick={props.handleSignInSubmit}>Sign In</Button>
    </Form>
  );
};

export default SignInForm;
