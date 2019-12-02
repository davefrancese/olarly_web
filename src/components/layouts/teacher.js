import React from "react"
import {Col, Row,Container} from 'reactstrap'
import Main from "../main";
// import Olarly_logo from '../../assets/img/logos/olarlymain.png'
import Wrapper from "../Wrapper";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Navbar from "../Navbar"

const TeacherLayout = ({children}) => (
  <React.Fragment>
    <Wrapper>
      <Sidebar />
      <Main>
        <Navbar />
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  </React.Fragment>
)

export default TeacherLayout;
