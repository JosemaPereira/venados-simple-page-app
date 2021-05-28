import axios from 'axios';

export const HttpClient = axios.create();

HttpClient.interceptors.request.use(
  config => config,
  error => {
    Promise.reject(error);
  }
);

HttpClient.interceptors.response.use(
  response => response,
  error => {
    Promise.reject(error);
  }
);