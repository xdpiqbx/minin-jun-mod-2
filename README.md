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
