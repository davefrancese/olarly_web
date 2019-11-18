import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "../style/signUpForm.scss";

const SignUpForm = props => {
  // const formInputs = props.user_credentials.forEach((item, i) {
  //   return (
  //     <Form.Item>
  //       <Input
  //         onChange={props.handleSignUpChange(`${props.user_credentials.item}`)}
  //         prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
  //         name="first_name"
  //         value={props.user_credentials.first_name}
  //         placeholder="First Name"
  //       />
  //     </Form.Item>
  //   )
  // })
  return (
    <Form className="sign-up-form">
      <Form.Item>
        <Input
          onChange={props.handleSignUpChange(props.user_credentials.first_name)}
          prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
          name="first_name"
          value={props.user_credentials.first_name}
          placeholder="First Name"
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={props.handleSignUpChange(props.user_credentials.last_name)}
          prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
          name="last_name"
          value={props.user_credentials.last_name}
          placeholder="Last Name"
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={props.handleSignUpChange(props.user_credentials.email)}
          prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
          name="email"
          value={props.user_credentials.email}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={props.handleSignUpChange(props.user_credentials.password)}
          prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
          name="password"
          type="password"
          value={props.user_credentials.password}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={props.handleSignUpChange(props.user_credentials.username)}
          prefix={<Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />}
          name="username"
          value={props.user_credentials.username}
          placeholder="Username"
        />
      </Form.Item>
      <Button onClick={props.promptUserType}>Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
