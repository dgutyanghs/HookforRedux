import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, decrement, increment } from "./usersSlice";
import {
  selectCount as selectCountAbove,
  increment as incrementCounter,
} from "../counter/counterSlice";

function Users() {
  const count = useSelector(selectCount);
  const countAbove = useSelector(selectCountAbove);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "2px solid green", width: "600px" }}>
      <h2 style={{margin: "10px 0"}}>User component</h2>
      <h5 style={{margin:"0 0"}}> count from counter component: {countAbove} </h5>
        <button onClick={() => dispatch(incrementCounter())}>
          addCounterAbove
        </button>
      <div>
        <h5 style={{margin:"40px 0 10px 0"}}> all users total: {count} </h5>
      </div>
      
      <div style={{margin:"0 0"}}>
        <button onClick={() => dispatch(increment())}> add user</button> &nbsp;
        <button onClick={() => dispatch(decrement())}> subtract user </button> &nbsp;
      </div>
      <br />
    </div>
  );
}

export default Users;
