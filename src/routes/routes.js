import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
//import Navigation from "../components/shared/navigation";
//Layouts
import LandingLayout from "../components/layouts/landing";
import AuthLayout from "../components/layouts/auth"
import TeacherLayout from "../components/layouts/teacher"
//import SignUp from "../components/users/signUp";
//import SignIn from "../components/users/signIn";
//import Profile from "../components/users/profile";

 import {
   landing as landingRoutes,
   auth as userAuthRoutes,
   teacher as teacherRoutes
 } from "./index";

 const childRoutes = (Layout, routes) => routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
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
      // Route item without children
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
          {childRoutes(LandingLayout, landingRoutes)}
          {childRoutes(TeacherLayout, teacherRoutes)}
          {childRoutes(AuthLayout, userAuthRoutes)}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.user
})

export default connect(
  mapStateToProps,
  null
)(Routes);
