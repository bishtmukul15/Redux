import React from "react";

import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "Increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "Decrement" });
  };

  const incBy = () => {
    dispatch({ type: "IncBy5" });
  };
  const decBy = () => {
    dispatch({ type: "DecBy5" });
  };
  return (
    <div>
      <h1>redux Counter</h1>
      <div>Counter Value:{counter}</div>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incBy}>Inc by 5</button>
        <button onClick={decBy}>Dec by 5</button>
      </div>
    </div>
  );
};

export default Counter;
