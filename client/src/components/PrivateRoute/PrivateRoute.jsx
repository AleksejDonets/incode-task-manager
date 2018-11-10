import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, status, load, ...rest }) => {
  if (load) {
    return (
      <Route
        {...rest}
        render={props =>
          status ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
};

export default PrivateRoute;
