import React, { Fragment, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import  {GlobalContext}  from 'context/globalState';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const {loggedIn} = useContext(GlobalContext)
  return (
    <Fragment>
     <Route {...rest} render={(props) => 
    loggedIn === true
      ? <Component {...props} />
      : <Redirect  to="/" />
  } />
  </Fragment>
  )
 
}
export default PrivateRoute;
