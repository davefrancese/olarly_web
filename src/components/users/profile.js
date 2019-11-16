import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true
    };
  }

  render() {
    return (
      <div className="Profile">
        <h3>Profile</h3>
        <p>Welcome</p>
      </div>
    );
  }
}

export default Profile;
