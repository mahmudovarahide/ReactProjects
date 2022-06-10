import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// type: "counter/increment" createSlice ozu yaradir
export const selectCount = state => state.counter.value;
export default counterSlice.reducer;