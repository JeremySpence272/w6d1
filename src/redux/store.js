import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
	isRunning: false,
	time: 0,
};
const stopwatchSlice = createSlice({
	name: "stopwatch",
	initialState,
	reducers: {
		startTimer: (state) => {
			state.isRunning = true;
		},
		stopTimer: (state) => {
			state.isRunning = false;
		},
		resetTimer: (state) => {
			state.isRunning = false;
			state.time = 0;
		},
	},
});

export const { startTimer, stopTimer, resetTimer } = stopwatchSlice.actions;

export const store = configureStore({
	reducer: {
		timer: stopwatchSlice.reducer,
	},
});
