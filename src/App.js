import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from "react-notifications";

import Home from 'components/user_auth/home';
import Register from 'components/user_auth/register'
import Login from 'components/user_auth/login'
import Dashboard from 'components/sms/dashboard';
import ContactForm from 'components/sms/contacts/contactForm';
import EditForm from 'components/sms/contacts/editForm';
import SmsBoard from 'components/sms/sms/smsLists'
import Logout from 'components/user_auth/logout';
import PrivateRoute from 'components/user_auth/privateRoute';
import './App.scss';


function App() {

  return (
    <Fragment>
      <Switch>
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/form" component={ContactForm} />
        <PrivateRoute path="/editForm/:id" component={EditForm} />
        <PrivateRoute path="/sms/:id" component={SmsBoard} />
        <Route exact path="/" component={Home} />
      </Switch>
      <NotificationContainer />
    </Fragment>

  );
}

export default App;
