import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
	value: number;
}

const initialState: InitialState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		changeByValue: (state, action) => {
			console.log(action);
			state.value = action.payload;
		},
	},
});

export const { increment, decrement, changeByValue } = counterSlice.actions;

export default counterSlice.reducer;
