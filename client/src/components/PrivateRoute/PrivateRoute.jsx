import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, status, ...rest }) => {
  console.log(status);
  return (
    <Route
      {...rest}
      render={props => (
        status
          ? (<Component {...props} />)
          : (<Redirect to= {{
            pathname: "/login",
          }}
          />)
      )}
    />
  );
};

export default PrivateRoute;
