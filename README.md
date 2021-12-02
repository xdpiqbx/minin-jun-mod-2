# 15. Авторизация и аутентификация. Часть 1

## 4. Рефакторинг формы регистрации - DONE

## 5. Принципы регистрации в Firebase

Мой тестовый `pwd: test1234`

[Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth)

[Sign up with email / password](https://firebase.google.com/docs/reference/rest/auth#section-create-email-password)

## 6. Auth Provider - просто БАЗА

```jsx
import React, { useContext } from "react";
import PropTypes from "prop-types";
// import userService from "../services/user.service";
// import { toast } from "react-toastify";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AuthProvider;
```

## 7. Метод Sign Up (Регистрация) - DONE

## 8. Создание экземпляров Axios

### axios.create({...})

```js
import axios from "axios";
import { toast } from "react-toastify";
import configFile from "../config.json";

const http = axios.create({
  baseURL: configFile.apiEndpoint
});

http.interceptors.request.use(
  function (config) {
    if (configFile.isFireBase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
function transormData(data) {
  return data
    ? Object.keys(data).map((key) => ({
        ...data[key]
      }))
    : [];
}
http.interceptors.response.use(
  (res) => {
    if (configFile.isFireBase) {
      res.data = { content: transormData(res.data) };
    }
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.log(error);
      toast.error("Somthing was wrong. Try it later");
    }
    return Promise.reject(error);
  }
);
const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete
};
export default httpService;
```

```js
import React, { useContext } from "react";
import PropTypes from "prop-types";
// import userService from "../services/user.service";
// import { toast } from "react-toastify";
import axios from "axios";

const httpAuth = axios.create();

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  async function signUp({ email, password }) {
    const key = "AIzaSyC9c...";
    const url = `https://identityt....?key=${key}`;
    const { data } = await httpAuth.post(url, {
      email,
      password,
      returnSecureToken: true
    });
    console.log(data);
  }
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AuthProvider;
```

## 9. JSON Web Token

![jwt](https://jwt.io/img/pic_logo.svg)

[JWT](https://jwt.io/)
