// src/components/Home.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="home-container">
      <h1>Welcome to Expense Tracker</h1>
      <p>You are successfully logged in!</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
