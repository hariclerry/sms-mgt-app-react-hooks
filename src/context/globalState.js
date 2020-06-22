import React, { createContext, useReducer } from "react";
import { NotificationManager } from 'react-notifications';
import {userService} from "httpServices/authService";
import AppReducer from "context/appReducer";

const initialState = {
  loggedIn: false,
  contacts: [],
  sms: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

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
      NotificationManager.error('User Email already exists!', 'Error!');

    }
  }

  const loginUser = async (phoneNumber, password, history) => {
    let apiEndpoint = "user/login";
    let payload = {
      phoneNumber: phoneNumber,
      password: password,
    };
    try {
      const response = await userService.post(apiEndpoint, payload)
      localStorage.setItem("token", response.data.token);
      dispatch({ type: 'LOGIN_USER',
      token: response.data.token,
     })
     history.push('/dashboard')
      NotificationManager.success('Login Succesful!', 'Successful!', 2000);
    } catch (error) {
      NotificationManager.error('Wrong user phone number or password!', 'Error!');

    }
  }

  const fetchContacts = async () => {
    let apiEndpoint = "contacts";
    try {
      const response = await userService.get(apiEndpoint)
      dispatch({ type: 'FETCH_CONTACTS', contacts: response.data })
    } catch (error) {
      NotificationManager.error('Failed to fetch contacts!', 'Error!');

    }
  }
  const addContacts = async (contactName, contactNumber, history) => {
    let apiEndpoint = "contacts";
    let payload = {
      contactName: contactName,
      contactNumber: contactNumber,
    };
    try {
      const response = await userService.post(apiEndpoint, payload)
      dispatch({ type: 'ADD_CONTACTS',
      contact: response.data.data
     })
     history.push('/dashboard')
      NotificationManager.success('Contact added successfully', 'Successful!', 2000);
    } catch (error) {
      NotificationManager.error('Failed to add contact!', 'Error!');

    }
  }

  const editContacts = async (contactName, id, history) => {
    let apiEndpoint = `contacts/${id}`;
    let payload = {
      contactName: contactName,
    };
    try {
      const response = await userService.patch(apiEndpoint, payload)
      dispatch({ type: 'EDIT_CONTACTS',
      contact: response.data,
     })
     history.push('/dashboard')
      NotificationManager.success('Contact edited successfully', 'Successful!', 2000);
    } catch (error) {
      NotificationManager.error('Failed to edit contact!', 'Error!');

    }
  }

  const deleteContacts = async (id) => {
    let apiEndpoint = `contacts/${id}`;
    try {
      const response = await userService.deleteDetail(apiEndpoint)
      dispatch({ type: 'DELETE_CONTACTS',
      contact: response.data,
     })
      NotificationManager.success('Contact deleted successfully', 'Successful!', 2000);
    } catch (error) {
      NotificationManager.error('Failed to delete contacts!', 'Error!');

    }
  }

  const fetchSms = async (id) => {
    let apiEndpoint = `contacts/${id}/sms`;
    try {
      const response = await userService.get(apiEndpoint)
      console.log('respionseFetchhhhhhh',response.data)
      dispatch({ type: 'FETCH_SMS', sms: response.data })
    } catch (error) {
      NotificationManager.error('Failed to fetch contacts!', 'Error!');

    }
  }
  const addSms = async (content, id, history) => {
    let apiEndpoint = `contacts/${id}/sms`;
    let payload = {
      content: content
    };
    try {
      const response = await userService.post(apiEndpoint, payload)
      console.log('respionseadddddd.data',response.data)
      console.log('respionseadddddd.data.data',response.data.data.sms)
      dispatch({ type: 'ADD_SMS', sms: response.data.data.sms
     })
      NotificationManager.success('Sms added successfully', 'Successful!', 2000);
    } catch (error) {
      NotificationManager.error('Failed to add contact!', 'Error!');

    }
  }

  const deleteSms = async (contactId, smsId) => {
    let apiEndpoint = `contacts/${contactId}/sms/${smsId}`;
    try {
      const response = await userService.deleteDetail(apiEndpoint)
      dispatch({ type: 'DELETE_SMS',
      sms: response.data,
     })
     window.location.reload()
      NotificationManager.success('Sms deleted successfully', 'Successful!', 2000);
    } catch (error) {
      NotificationManager.error('Failed to delete contacts!', 'Error!');

    }
  }

  return (
    <GlobalContext.Provider
      value={{
        loggedIn: state.loggedIn,
        contacts: state.contacts,
        fetchContacts,
        addContacts,
        editContacts,
        deleteContacts,
        addSms,
        createUser,
        loginUser,
        sms: state.sms,
        fetchSms,
        deleteSms
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};