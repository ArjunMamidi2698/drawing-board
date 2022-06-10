import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PickedProvider } from "./stores/picked-context";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes";
import { BoardProvider } from "./stores/board-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BoardProvider>
				<PickedProvider>
					<App />
				</PickedProvider>
			</BoardProvider>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
