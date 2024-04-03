import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, stopTimer, resetTimer } from "./redux/store";

const Stopwatch = () => {
	const dispatch = useDispatch();
	const isRunning = useSelector((state) => state.timer.isRunning);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let intervalId;
		if (isRunning) {
			intervalId = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
		} else {
			clearInterval(intervalId);
		}
		return () => clearInterval(intervalId);
	}, [isRunning]);

	const toggleRunningState = () => {
		dispatch(isRunning ? stopTimer() : startTimer());
	};

	const handleReset = () => {
		dispatch(resetTimer());
		setTime(0);
	};

	const formatTimeUnit = (unit) => {
		return unit.toString().padStart(2, "0");
	};

	const hours = Math.floor(time / 360000);
	const minutes = Math.floor((time % 360000) / 6000);
	const seconds = Math.floor((time % 6000) / 100);
	const milliseconds = time % 100;

	return (
		<div className="stopwatch-container">
			<p className="stopwatch-time">
				{formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
				{formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
			</p>
			<div className="stopwatch-buttons">
				<button className="stopwatch-button" onClick={toggleRunningState}>
					{isRunning ? "Stop" : "Start"}
				</button>
				<button className="stopwatch-button" onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Stopwatch;
