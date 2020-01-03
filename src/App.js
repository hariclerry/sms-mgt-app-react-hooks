import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/user_auth/home';
import './App.scss';

function App() {
  return (
    <Fragment>
      <main className="container">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      </main>
    </Fragment>
  );
}

export default App;
