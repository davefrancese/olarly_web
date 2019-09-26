import React from "react"
import {Col, Container} from 'reactstrap'

const Auth = ({children}) => (
  <React.Fragment>
    <Container>
      {children}
    </Container>
  </React.Fragment>
)

export default Auth;
