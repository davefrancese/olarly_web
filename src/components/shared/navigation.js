import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import SignOut from '../users/signOut'

class Navigation extends React.Component{
  render() {
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/auth/sign-in">Sign In</Link>
        <Link to="/auth/sign-up" >New User</Link>
        <SignOut />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, null)(Navigation)
