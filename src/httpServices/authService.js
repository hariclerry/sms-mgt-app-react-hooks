
import axios from 'axios';

const userToken = localStorage.getItem('token')

export const API = axios.create({
  // baseURL: `https://sms-mgt-app-api.herokuapp.com/api/v1`,
  baseURL: `http://localhost:3009/api/v1`,
  headers: {
    'x-auth-token': userToken
}
});

export default {
  API
}
