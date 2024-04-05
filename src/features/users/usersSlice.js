import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        increment:(state) => {state.value += 1},
        decrement:(state) => {state.value -= 1},
    }
})

export const selectCount = (state) => state.users.value;
export const {increment, decrement} = usersSlice.actions;
export default usersSlice.reducer;