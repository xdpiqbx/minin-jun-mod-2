import axios from 'axios';

axios.interceptors.response.use(
  res => res,
  error => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.log('Unexpected Error (catched in interceptor)');
    }
    return Promise.reject(error);
  }
);
const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

export default httpService;
