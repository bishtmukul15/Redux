import React, { Component } from "react";

import { useSelector, useDispatch, connect } from "react-redux";
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
  const incHandler = () => {
    dispatch({ type: "Increase", amount: 10 });
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
        <button onClick={incHandler}>inc by 10</button>
      </div>
    </div>
  );
};
export default Counter;
// how to use redux in class bases components
// class Counter extends Component {
//   incrementHandler() {
//     this.props.Increment();
//   }
//   decrementHandler() {
//     this.props.Decrement();
//   }
//   incBy() {
//     this.props.IncBy5();
//   }
//   decBy() {
//     this.props.DecBy5();
//   }
//   render() {
//     return (
//       <div>
//         <h1>redux Counter</h1>
//         <div>Counter Value:{this.props.Counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//           <button onClick={this.incBy.bind(this)}>Inc by 5</button>
//           <button onClick={this.decBy.bind(this)}>Dec by 5</button>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToprops = (state) => {
//   return {
//     Counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     Increment: () => dispatch({ type: "Increment" }),
//     Decrement: () => dispatch({ type: "Decrement" }),
//     IncBy5: () => dispatch({ type: "IncBy5" }),
//     DecBy5: () => dispatch({ type: "DecBy5" }),
//   };
// };
// export default connect(mapStateToprops, mapDispatchToProps)(Counter);
