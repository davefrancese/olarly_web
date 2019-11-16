import React from "react";
// import {Form, Icon, Input, Button} from 'antd'
import SignInForm from "./signInForm";
// import SignUpPromptUserType from "./signUpUserType";
import { signInUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      username: ""
    };
    this.handleSignInChange.bind = this.handleSignInChange.bind(this);
  }

  handleSignInSubmit = e => {
    e.preventDefault();
    let userParams = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signInUser(userParams);
    // this.props.history.push(`/user/profile/`);
  };

  handleSignInChange = input => e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <SignInForm
          user_credentials={this.state}
          handleSignInChange={this.handleSignInChange}
          handleSignInSubmit={this.handleSignInSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.user
});

export default withRouter(
  connect(
    mapStateToProps,
    { signInUser }
  )(SignIn)
);
