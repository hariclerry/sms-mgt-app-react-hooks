import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from "react-notifications";
import jwtDecode from 'jwt-decode';

import Home from 'components/user_auth/home';
import Register from 'components/user_auth/register'
import Login from 'components/user_auth/login'
// import NavigationBar from 'components/common/navBar/navigationBar';
import Dashboard from 'components/sms/dashboard';
import ContactForm from 'components/sms/contacts/contactForm';
import EditForm from 'components/sms/contacts/editForm';
import SmsBoard from 'components/sms/sms/smsLists'
import Logout from 'components/user_auth/logout';
import PrivateRoute from 'components/user_auth/privateRoute';
// import {setJwt} from 'httpServices/authService'
// import { GlobalProvider } from 'context/globalState';
import './App.scss';


function App() {
  // const [authTokens, setAuthTokens] = useState();

  // useEffect(() => {
  //   getTokens();
  // }, []); 

  // const getTokens = () => {
  //   try {
  //    const jwt = localStorage.getItem('token')
  //    const user = jwtDecode(jwt);
  //    setAuthTokens({user})
  //   } catch (error) {
  //     return null;
  //   }
  //  }

  return (
    <Fragment>
      <Switch>
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute path="/form" component={ContactForm} />
        {/* <Route path="/form" component={ContactForm} /> */}
        {/* <Route path="/editForm/:id" component={EditForm} /> */}
        <PrivateRoute path="/editForm/:id" component={EditForm} />
        {/* <Route path="/sms/:id" component={SmsBoard} /> */}
        <PrivateRoute path="/sms/:id" component={SmsBoard} />
        <Route exact path="/" component={Home} />
      </Switch>
      <NotificationContainer />
    </Fragment>

  );
}

export default App;
