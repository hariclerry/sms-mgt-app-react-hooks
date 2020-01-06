import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

// import NavigationBar from 'components/common/navBar/navigationBar';
import InputField from 'components/common/inputField/input'
import Button from 'components/common/button/button';
import './home.scss';

const Register = () => {
  return ( 
       <Fragment>
        <div className="home-main">
          <div className="home-content">
            <h1>Welcome to SMS management App</h1>
            <div className="home-logo">
              <div className="home-button">
              <span style={{paddingBottom: '20px'}}>Please login below</span>
              <form>
              <div className="input-container">
                <InputField 
                name='phoneNumber'
                label='Phone Number' 
                type='number' 
                />
                <InputField 
                name='password'
                label='Password' 
                type='password' 
                />
                <span className="">
                <Link to="/login">
                 <Button text="Login" /> 
                 </Link>
                 </span>
                </div>
              </form>
                 </div>
            </div>
          </div>
        </div>
      </Fragment>
   );
}
 
export default Register;