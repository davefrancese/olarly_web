import React from 'react'
import {Form, Icon, Input, Button} from 'antd'

const SignUpForm = (props) => {
    return(
      <Form>
        <Form.Item>
          <Input
            onChange={props.handleSignUpChange(props.user_credentials.email)}
            prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="email"
            value={props.user_credentials.email}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <Input
            onChange={props.handleSignUpChange(props.user_credentials.password)}
            prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="password"
            value={props.user_credentials.password}
            placeholder="Password"
          />
        </Form.Item>
        <Button onClick={props.promptUserType}>
          Sign Up
        </Button>
      </Form>
    )

}

export default SignUpForm
