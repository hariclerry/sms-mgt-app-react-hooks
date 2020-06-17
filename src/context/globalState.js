import React, { createContext, useReducer } from "react";
import { NotificationManager } from 'react-notifications';

// import { userConstants } from "../actions/actionTypes";
import {userService} from "httpServices/authService";
import AppReducer from "context/appReducer";

const initialState = {
   
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  function registerUser() {
    return{
      type: "REGISTER_USER"
    };
  }
  const createUser = async (name, phoneNumber, password) => {
    let apiEndpoint = "user";
    let payload = {
      name: name,
      phoneNumber: phoneNumber,
      password: password,
    };
    try {
      await userService.post(apiEndpoint, payload)
      dispatch({ type: 'REGISTER_USER' })
      NotificationManager.success('Registration Succesful!', 'Successful!', 2000);
    } catch (error) {
      // dispatch({ type: 'FAILURE', error: error.message || error })
      NotificationManager.error('User Email already exists!', 'Error!');

    }
  }


  function editEmployee(employees) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        // employees: state.employees,
        // removeEmployee,
        createUser,
        editEmployee
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};