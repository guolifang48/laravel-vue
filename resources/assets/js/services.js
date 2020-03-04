/**
 * Services
 *
 * All external services are definied here
 *
 */

import axios from 'axios';
import store from './store';

const baseAPI = `${window.location.protocol}//${window.location.host}/api`

// [GET] Data by route
export function getData(route) {
  const endpoint = `${baseAPI}${route}`;

  return axios.get(endpoint)
    .then(response => response)
    .catch(throwError, route);
};

// [POST] Newsletter
export function postNewsletter(data) {
  const endpoint = `${baseAPI}/newsletter`;

  return axios.post(endpoint, data)
    .then(response => response.data)
    .catch(throwError);
};

// [POST] Contact Form
export function postContact(data) {
  const endpoint = `${baseAPI}/contact`;

  return axios.post(endpoint, data)
    .then(response => response.data)
    .catch(throwError);
};

// [Handler] Service Error Handler
const throwError = (error, route) => {
  console.log(error, route);
  throw error;
};
