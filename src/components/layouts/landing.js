import React from "react";
// import {Col, Container, Row} from 'reactstrap'
import Navigation from "../shared/navigation";
import Profile from "../users/profile";

import "../style/landing.scss";

class LandingLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true
    };
  }

  renderContent() {
    return this.state.user ? (
      <div>
        <Profile />
      </div>
    ) : (
      <div>
        <p>User False</p>
      </div>
    );
  }

  render() {
    return (
      <div className="Landing-Layout">
        <Navigation />
        <main>{this.renderContent()}</main>
      </div>
    );
  }
}

export default LandingLayout;
