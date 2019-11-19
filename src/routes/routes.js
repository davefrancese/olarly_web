import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "../components/shared/navigation";
//Layouts
import Landing from "../components/layouts/landing";
import SignUp from "../components/users/signUp";
import SignIn from "../components/users/signIn";
import Profile from "../components/users/profile";
// import AuthLayout from "../components/layouts/auth";
// import Profile from "../components/users/profile";
// //Routes
 import {
   landing as landingRoutes,
   auth as userAuthRoutes,
   user as userRoutes
 } from "./index";

 const childRoutes = (Layout, routes) =>
   routes.map(({ children, path, component: Component }, index) =>
     children ? (
       //Route item with children
       children.map(({ path, component: Component }, index) => (
         <Route
           key={index}
           path={path}
           exact
           render={props => (
             <Layout>
               <Component {...props} />
             </Layout>
           )}
         />
       ))
     ) : (
       //Route item without Children
       <Route
         key={index}
         path={path}
         exact
         render={props => (
           <Layout>
             <Component {...props} />
           </Layout>
         )}
       />
     )
   );

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {childrenRoutes()}
          {childrenRoutes()}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Routes);
