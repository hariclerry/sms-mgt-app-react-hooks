import React, { Fragment, useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import InputField from 'components/common/inputField/input';
import Button from 'components/common/button/button';
import { API } from 'httpServices/authService';
import './home.scss';

const Register = props => {
  const initialFormState = {
    name: '',
    phoneNumber: '',
    password: '',
    formErrors: {
      nameError: '',
      phoneNumberError: '',
      passwordError: ''
    }
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    let formErrors = user.formErrors;

    switch (name) {
      case 'name':
        formErrors.nameError =
          value.length < 5 ? 'Name must be 3 characters long!' : '';
        break;
      case 'phoneNumber':
        formErrors.phoneNumberError =
          value.length < 5 ? 'Phone number must be 5 characters long!' : '';
        break;
      case 'password':
        formErrors.passwordError =
          value.length < 5 ? 'Password must be 5 characters long!' : '';
        break;
      default:
        break;
    }
    setUser({ ...user, formErrors, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { name, phoneNumber, password } = user;
    try {
      await API.post(`/user`, { name, phoneNumber, password });
      props.history.push('/login');
      NotificationManager.success('User registration successful, login to continue!');
    } catch (error) {
      // Fix the error response @harriet
      NotificationManager.error(`Error: ${error}`);
    }
  };
  const disableSubmitButton =
    user.name === '' || user.phoneNumber === '' || user.password === '';
  return (
    <Fragment>
      <div className="home-main">
      <NotificationContainer/>
        <div className="home-content">
          <h1>Welcome to SMS management App</h1>
          <div className="home-logo">
            <div className="home-button">
              <span style={{ paddingBottom: '20px' }}>
                Please register below
              </span>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <InputField
                    name="name"
                    label="Name"
                    type="text"
                    value={user.name}
                    onChange={handleInputChange}
                  />
                  {user.formErrors.nameError.length > 0 && (
                    <div
                      style={{
                        color: 'red',
                        fontSize: '12px'
                      }}>{`* ${user.formErrors.nameError}`}</div>
                  )}
                  <InputField
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {user.formErrors.phoneNumberError.length > 0 && (
                    <div
                      style={{
                        color: 'red',
                        fontSize: '12px'
                      }}>{`* ${user.formErrors.phoneNumberError}`}</div>
                  )}
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                  {user.formErrors.passwordError.length > 0 && (
                    <div
                      style={{
                        color: 'red',
                        fontSize: '12px'
                      }}>{`* ${user.formErrors.passwordError}`}</div>
                  )}
                  <span className="">
                    <Button
                      text="Signup"
                      type="submit"
                      value="Submit"
                      className="general-btn"
                      disabled={disableSubmitButton}
                    />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
