import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import jwtDecode from 'jwt-decode';

import Home from 'components/user_auth/home';
import Register from 'components/user_auth/register'
import Login from 'components/user_auth/login'
import NavigationBar from 'components/common/navBar/navigationBar';
import Dashboard from 'components/sms/dashboard';
import contactForm from 'components/sms/contacts/contactForm';
import Logout from 'components/user_auth/logout';
import PrivateRoute from 'components/user_auth/privateRoute';
import { AuthContext } from 'context/context';
// import {setJwt} from 'httpServices/authService'
import './App.scss';


function App() {
  const [authTokens, setAuthTokens] = useState();

  useEffect(() => {
    getTokens();
  }, []); 

  const getTokens = () => {
    try {
     const jwt = localStorage.getItem('token')
     const user = jwtDecode(jwt);
    //  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
     setAuthTokens({user})
    } catch (error) {
      return null;
    }
   }

//    // config fo default header
// const setJwt = (jwt) => {
//   Axios.defaults.headers.common['x-auth-token'] = jwt
// }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens}}>
    <Fragment>
     <NavigationBar />
      <main className="container">
      <Switch>
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/form" component={contactForm} />
        <Route exact path="/" component={Home} />
      </Switch>
      </main>
    </Fragment>
    </AuthContext.Provider>
  );
}

export default App;
