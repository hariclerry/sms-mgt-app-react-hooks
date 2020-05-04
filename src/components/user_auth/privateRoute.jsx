import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import {useAuth} from 'context/context'

const PrivateRoute = ({ component: Component, ...rest }) => {
 
  const {authTokens} = useAuth();
  return (
    <Fragment>
      {console.log("authTokens............", authTokens)}
     <Route {...rest} render={(props) => 
      authTokens
      ? (<Component {...props} />)
      : (<Redirect  to="/login" />)
  } />
  </Fragment>
  )
 
}
export default PrivateRoute;
