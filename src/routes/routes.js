import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"
//Layouts
import LandingLayout from "../components/layouts/landing"
import AuthLayout from "../components/layouts/auth"
//Routes
import {
  landing as landingRoutes,
  auth as userAuthRoutes,
} from "./index"

const childRoutes = (Layout, routes) =>
    routes.map(({children, path, component: Component}, index) =>
    children ? (
      //Route item with children
      children.map(({path, component: Component}, index) => (
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
  )

class Routes extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          {childRoutes(LandingLayout, landingRoutes)}
          {childRoutes(AuthLayout, userAuthRoutes)}
        </Switch>
      </Router>
    )
  }
}

export default Routes
