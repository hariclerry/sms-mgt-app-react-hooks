import React, { Fragment, useState,useContext } from 'react';
import  {GlobalContext}  from 'context/globalState';
import { useHistory } from "react-router-dom";
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
  const { createUser } = useContext(GlobalContext);
 let history = useHistory();

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
    createUser(name, phoneNumber, password );
    history.push("/");
    setUser(initialFormState)
  };
  const disableSubmitButton =
    user.name === '' || user.phoneNumber === '' || user.password === '';
  return (
    <Fragment>
            <div className="home-button">
              <h2 style={{ paddingBottom: '5px' }}>
                Register
              </h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <InputField
                    name="name"
                    label="Name"
                    type="text"
                    value={user.name}
                    onChange={handleInputChange}
                  />
                  {user.formErrors.nameError.length > 0 && (
                    <div className="form-error">{`* ${user.formErrors.nameError}`}</div>
                  )}
                  </div>
                  <div>
                  <InputField
                    name="phoneNumber"
                    label="Phone Number"
                    type="number"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {user.formErrors.phoneNumberError.length > 0 && (
                    <div className="form-error">{`* ${user.formErrors.phoneNumberError}`}</div>
                  )}
                  </div>
                  <div>
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                  {user.formErrors.passwordError.length > 0 && (
                    <div className="form-error">{`* ${user.formErrors.passwordError}`}</div>
                  )}
                  </div>
                  <span className="btn2">
                    <Button
                      text="Submit"
                      type="submit"
                      value="Submit"
                      className="general-btn2"
                      disabled={disableSubmitButton}
                    />
                  </span>
              </form>
            </div>
    </Fragment>
  );
};

export default Register;
