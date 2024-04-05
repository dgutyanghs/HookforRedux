import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCount,  decrement } from './usersSlice'
import {increment} from '../counter/counterSlice'

function Users() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>User</h2>
        <div>
            <label> all users {count} </label>
        </div>
        <button onClick={() => dispatch(increment())}> add </button> &nbsp;
        <button onClick={() => dispatch(decrement())}> subtract </button>
    </div>
  )
}

export default Users