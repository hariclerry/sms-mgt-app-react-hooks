import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';

import Home from 'components/user_auth/home';
import Register from 'components/user_auth/register'
import Login from 'components/user_auth/login'
import NavigationBar from 'components/common/navBar/navigationBar';
import './App.scss';

function App() {
  return (
    <Fragment>
     <NavigationBar />
      <main className="container">
      <Switch>
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
      </main>
    </Fragment>
  );
}

export default App;
