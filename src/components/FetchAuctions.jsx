import React from "react";
import cookie from 'react-cookies'

const getAuctions = async () => {
  return fetch("http://localhost:8080/api/auction/find/all");
};

const logIn = async () => {
  const loginData = {
    username: "admin45",
    password: "admin45",
  };

  const options = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json", 
    },
    credentials: 'include',
    body: JSON.stringify(loginData)
  };

  const response = await fetch("http://localhost:8080/api/auth/signin", options);

  const jsessionid = cookie.load('JSESSIONID');

  options.headers['Cookie'] = `JSESSIONID=${jsessionid}`;

  return response;
};

const getUsers = async () => {
    return fetch("http://localhost:8080/api/user/find/all");
  };

export { getUsers, getAuctions, logIn };
