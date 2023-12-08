import React from "react";
import { useReducer } from "react";

const redUser = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      break;
  }
};
const Counter = () => {
  const [state, disptach] = useReducer(redUser, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => disptach({ type: "INCREMENT" })}>+</button>
      <button onClick={() => disptach({ type: "DECREMENT" })}>-</button>
    </div>
  );
};
export default Counter;
