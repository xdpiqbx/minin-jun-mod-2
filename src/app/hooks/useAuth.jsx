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
    const key = "AIzaSyC9cdN1M1J7z6Q3qEzbjcWEBFHUIXQJcnk";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
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
