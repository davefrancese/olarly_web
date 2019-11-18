import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "../shared/navigation";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true
    };
  }

  render() {
    console.log("Profile", this.props.user);
    return (
      <div className="Profile">
        <Navigation isRegistered={this.props.user.registered} />
        <h3>Profile</h3>
        <p>Welcome, {this.props.user.user.username}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
