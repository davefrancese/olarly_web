import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userSignOut } from "../../actions/userActions";

import "../style/navigation.scss";

class Navigation extends React.Component{
  constructor(){
    super()
    this.sign_out = this.sign_out.bind(this)
  }

  redirectResponse = (response) => {
    this.props.history.push(`/`)
  }

  sign_out(e){
    e.preventDefault()
    this.props.userSignOut(this.redirectResponse)
    //dave, redirectResp is a callback I just like doing it like this
    //it might be over the top but it lays the foundation to do much more
  }

  render(){
    let AuthorizedLinks;
    let redirectPath;

    switch(Auth.isUserAuthenticated()){
      case true:
        AuthorizedLinks = [
          <button onClick={this.sign_out}>Sign Out</button>
        ]
        break;
      case false:
        AuthorizedLinks = [
          <Link to="/auth/sign-in">Sign In</Link>,
          <Link to="/auth/sign-up">Sign up</Link>]
        break;
    }

    const linkItems = AuthorizedLinks.map((link) =>
      <p>{link}</p>
    )
    return(
      <div>
        {redirectPath}
        {linkItems}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, { userSignOut })(Navigation))
