// src/components/Login.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="login-container">
      <h2>Please Login</h2>
      <form onSubmit={loginHandler}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
