import React from "react";
import { Link } from "react-router-dom";
import "../style/navigation.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNav() {
    return this.props.isUser ? (
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
