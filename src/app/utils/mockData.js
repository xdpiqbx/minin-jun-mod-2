// import React, { useContext, useEffect, useState } from "react";
import { useState } from "react";
import professions from "../mockData/professions.json";
// import qualities from "../mockData/qualities.json";
// import users from "../mockData/users.json";
import httpService from "../services/httpService";

const useMockData = () => {
  // const statusConst = {
  //   idle: "Not Started",
  //   pending: "In Process",
  //   successed: "Ready",
  //   error: "Error Occured"
  // };
  const [error, setError] = useState(null);
  // const [status, setStatus] = useState(statusConst.idle);

  async function initialize() {
    try {
      for (const prof of professions) {
        await httpService.put("profession/" + prof._id, prof);
      }
    } catch (error) {
      setError(error);
    }
  }
  return { error, initialize };
};

export default useMockData;
