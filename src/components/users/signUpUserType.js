import React from 'react'
import {Card} from 'antd'
import {Row, Col} from 'reactstrap'

const SignUpPromptUserType = (props) => {
  return(
    <div>
      <Row>
        <Col sm="12" md="6" lg="6">
          <Card
          onClick={props.handleSignUpSubmit('admin')}
          >
          <Card.Meta title="Admin" />
          </Card>
        </Col>
        <Col sm="12" md="6" lg="6">
        <Card
        onClick={props.handleSignUpSubmit('admintwo')}
        >
        <Card.Meta title="AdminTwo" />
        </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SignUpPromptUserType
