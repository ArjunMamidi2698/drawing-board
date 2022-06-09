import "./App.css";
import { Header } from "./components/Header";
import { Board } from "./components/board/Board";

function App() {
	return (
		<div className="App">
			<Header />
			<Board />
		</div>
	);
}

export default App;
