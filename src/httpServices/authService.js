
import axios from 'axios';

export const API = axios.create({
  baseURL: `http://localhost:3009/api/v1`,
});

export default {
  API
}
