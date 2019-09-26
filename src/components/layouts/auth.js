import React from "react"
import {Col, Container} from 'reactstrap'
import Main from "../main";
import Olarly_logo from '../../assets/img/logos/olarlymain.png'

const Auth = ({children}) => (
  <React.Fragment>
  <Main className="auth-landing d-flex w-100">
    <Container className="d-flex flex-column">
      <Row className="h-100">
        <Col sm="10" md="8" lg="6" className="mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
          <img src={Olarly_logo} className="auth-logo-img" />
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  </Main>
  </React.Fragment>
)

export default Auth;
