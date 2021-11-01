import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const createRoute = (condition) => {
  return class extends Component {
    render() {
      const { path, component: RouterComp, redirectPath } = this.props;
      return (
        <Route
          path={path}
          render={(routeProps) => {
            // console.log(routeProps);
            if (condition()) {
              return <RouterComp {...routeProps} />;
            }
            return <Redirect to={redirectPath} />;
          }}
        />
      );
    }
  };
};
export const AuthRoute = createRoute(() => !localStorage.getItem("adminToken"));
export const PrivateRoute = createRoute(() => localStorage.getItem("adminToken"));
