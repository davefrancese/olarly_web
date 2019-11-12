import React from 'react'
// import {Form, Icon, Input, Button} from 'antd'
import SignUpForm from './signUpForm'
import SignUpPromptUserType from './signUpUserType'
import {signUpUser} from '../../actions/userActions'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class SignUp extends React.Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      userTypePrompt: false
    }
  this.promptUserType = this.promptUserType.bind(this)
  this.handleSignUpChange.bind = this.handleSignUpChange.bind(this)
  }

  promptUserType() {
    this.setState({
      userTypePrompt: true
    })
  }

  handleSignUpSubmit = userType => e => {
    e.preventDefault()
    let userParams = {
      email: this.state.email,
      password: this.state.password,
      role: userType
    }
    this.props.signUpUser(userParams)
    this.props.history.push(`/user/profile/`)
  }

  handleSignUpChange = input => e => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  render(){
    let userForm;
    switch(this.state.userTypePrompt){
      case false:
        userForm = <SignUpForm promptUserType=
      {this.promptUserType} user_credentials={this.state} handleSignUpChange={this.handleSignUpChange} />
      break;
      case true:
        userForm = <SignUpPromptUserType handleSignUpSubmit={this.handleSignUpSubmit} />
      break;
      default:
        return null;
    }
    return(
      <div>
      {userForm}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.user
})

export default withRouter(connect(mapStateToProps, {signUpUser})(SignUp))
