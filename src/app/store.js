import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    /**
     * counter is come from file counterSilce.js 
     * export const selectCount = (state) => state.counter.value;
     *  same reason, users come from file usersSlice.js
     *  export const selectCount = (state) => state.users.value;
     */
    counter: counterReducer, //
    users: usersReducer,
  },
});
