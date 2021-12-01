import axios from "axios";
import configFile from "../config.json";
import { toast } from "react-toastify";

axios.defaults.baseURL = configFile.apiEndPoint;

axios.interceptors.request.use(
  (config) => {
    if (configFile.isFirebase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const transformData = (data) => {
  return data
    ? Object.keys(data).map((key) => ({
        ...data[key]
      }))
    : [];
};
axios.interceptors.response.use(
  (res) => {
    if (configFile.isFirebase) {
      res.data = { content: transformData(res.data) };
      // console.log(res.data);
    }
    return res;
  },
  (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      console.log(error);
      toast.error("Something went wrong. Try again later");
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
