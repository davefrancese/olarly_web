import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
//import Navigation from "../components/shared/navigation";
//Layouts
import LandingLayout from "../components/layouts/landing";
import AuthLayout from "../components/layouts/auth"
//import SignUp from "../components/users/signUp";
//import SignIn from "../components/users/signIn";
//import Profile from "../components/users/profile";

 import {
   landing as landingRoutes,
   auth as userAuthRoutes
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

        {/*
          Each request hits here first - our routes class is rendered on our App.js. It calls the above childrenRoutes function
          it passes a wrapper component and its routes. Notice there are two conditionals -
          one for wrappers with chilren and one wrappers without. In our index file - notice how some Routes
          have a children prop set as an array of object.
          What happens here is it loops through and matches with the requested route then renders that
          component tied to that matched route.
          If a wrapper component has children it will be called inside the component ie {children}
          If you notice in components/layouts/landing - there is no children being called. Which would
          make sense because in our index our landingRoutes we did not define any children.
        */}

          {childRoutes(LandingLayout, landingRoutes)}
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
