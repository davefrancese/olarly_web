import React from "react";
import { connect } from "react-redux";
// import {Col, Container, Row} from 'reactstrap'
// import Navigation from "../shared/navigation";
import Profile from "../users/profile";

import "../style/landing.scss";

class LandingLayout extends React.Component {
  renderContent() {
    return this.props.isRegistered ? (
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
    console.log("landing", this.props);
    return (
      <div className="Landing-Layout">
        <main>{this.renderContent()}</main>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user.user
  };
};

export default connect(
  mapStateToProps,
  null
)(LandingLayout);
