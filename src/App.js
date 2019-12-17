import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from 'components/user_auth/home';
import './App.css';

function App() {
  return (
    <Fragment>
      <header className="App-header">
        <h1>SMS Management APP</h1>
      </header>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
