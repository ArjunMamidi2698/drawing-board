import { createContext, useContext, useState } from "react";

const initialContext = {
	resetBoard: false,
	setResetBoard: () => undefined,
	drag: false,
	setDrag: () => undefined,
	tableDimensions: [15, 30],
	setTableDimensions: () => undefined,
};
const BoardContext = createContext(initialContext);
export const useBoard = () => useContext(BoardContext);

export const BoardProvider = ({ children }) => {
	const [resetBoard, setResetBoard] = useState(initialContext.resetBoard);
	const [drag, setDrag] = useState(initialContext.drag);
	const [tableDimensions, setTableDimensions] = useState(
		initialContext.tableDimensions
	);
	const value = {
		resetBoard,
		setResetBoard,
		drag,
		setDrag,
		tableDimensions,
		setTableDimensions,
	};
	return (
		<BoardContext.Provider value={value}>{children}</BoardContext.Provider>
	);
};
export default BoardContext;
