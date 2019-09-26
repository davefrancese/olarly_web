import React from 'react'
import {Form, Icon, Input, Button} from 'antd'

class SignUp extends React.Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  render(){
    return(
      <Form>
        <Form.Item>
          <Input
            prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="email"
            value={this.state.email}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
        </Form.Item>
        <Button>
          Register
        </Button>
      </Form>
    )
  }
}

export default SignUp
