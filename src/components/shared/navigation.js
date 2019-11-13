import React from "react";
import { Link } from "react-router-dom";
import "../style/navigation.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }

  renderNav() {
    return this.state.user ? (
      <ul>
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/sign-out">Sign Out</Link>
        </li>
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
    return (
      <div className="Navigation">
        <img src="olarlymain2.png" alt="scholarly logo" />
        <nav>{this.renderNav()}</nav>
      </div>
    );
  }
}

export default Navigation;
