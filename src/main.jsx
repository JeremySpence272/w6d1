import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Stopwatch from "./Stopwatch.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<Stopwatch />
		</Provider>
	</React.StrictMode>
);
