import React from 'react'
import {Link} from 'react-router-dom'

class Navigation extends React.Component{
  render() {
    return(
      <div>
      <Link to="/">Home</Link>
      <Link to="/auth/sign_up" >New User</Link>
      </div>
    )
  }
}

export default Navigation
