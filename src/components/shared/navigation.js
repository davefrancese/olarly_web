import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/auth/sign-in">Sign In</Link>
        <Link to="/auth/sign-up">New User</Link>

      </div>
    );
  }
}

export default Navigation
