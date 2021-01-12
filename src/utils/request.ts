import axios, { AxiosRequestConfig } from 'axios';
import { from } from 'rxjs';

// axios 实例
const instance = axios.create({
  baseURL: '',
  timeout: 100000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return;
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return;
  }
)

