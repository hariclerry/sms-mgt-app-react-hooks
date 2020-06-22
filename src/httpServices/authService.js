import axios from "axios";
import config from "config/config";

export const userService = {
  get,
  post,
  patch,
  deleteDetail,
};
function get(apiEndpoint) {
  return axios
    .get(config.baseUrl + apiEndpoint, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
function post(apiEndpoint, payload) {
  return axios
    .post(config.baseUrl + apiEndpoint, payload, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
function patch(apiEndpoint, payload) {
  return axios
    .patch(config.baseUrl + apiEndpoint, payload, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}
function deleteDetail(apiEndpoint) {
  return axios
    .delete(config.baseUrl + apiEndpoint, getOptions())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOptions(){
  let options = {};
  if(localStorage.getItem('token')){
      options.headers = { 'x-auth-token': localStorage.getItem('token') };
  }
  return options;
}
