import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignOut from "../users/signOut";

import "../style/navigation.scss";

class Navigation extends React.Component {
  renderNav() {
    return this.props.isRegistered ? (
      <ul>
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        {/* list classes/students/tasks here */}
        <li>Classes</li>
        <li>Students</li>
        <li>Tasks</li>
        <li>{/* <SignOut signOutUser={this.props.signOutUser} /> */}</li>
      </ul>
    ) : (
      <ul>
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/auth/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/auth/sign-up">New User</Link>
        </li>
      </ul>
    );
  }

  render() {
    console.log("Navigation", this.props);
    return (
      <div className="Navigation">
        <img src="olarlymain2.png" alt="scholarly logo" />
        <nav>{this.renderNav()}</nav>
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
)(Navigation);
