import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('user') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/user/account/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};