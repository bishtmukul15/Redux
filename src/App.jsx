// src/App.jsx
import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return <>{!isAuth ? <Login /> : <Home />}</>;
};

export default App;
