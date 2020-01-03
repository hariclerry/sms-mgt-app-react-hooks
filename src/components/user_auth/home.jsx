import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

import NavigationBar from 'components/common/navigationBar';
import Button from 'components/common/button';
import smsicon from 'widgets/images/smsicon2.jpeg';
import './home.scss';

class Home extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <NavigationBar />
        <div className="home-main">
          <div className="home-content">
            <h1>Welcome to SMS management App</h1>
            <div className="home-logo">
              <img src={smsicon} alt="sms icon" width="600" />
              <div className="home-button">
              <span className="">Please register or login to start using the App</span>
              <span className="">
                <Link to="/signup">
                 <Button text="Signup" /> 
                 </Link>
                 <Link to="/login">
                 <Button text="Login"/> 
                 </Link>
                 </span>
                 </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
