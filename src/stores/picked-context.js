import { createContext, useContext, useState } from "react";

const initialContext = {
	picked: "#000fff",
	setPicked: () => undefined,
	resetBoard: false,
	setResetBoard: () => undefined,
};
const PickedContext = createContext(initialContext);
export const usePicked = () => useContext(PickedContext);

export const PickedProvider = ({ children }) => {
	const [picked, setPicked] = useState(initialContext.picked);
	const [resetBoard, setResetBoard] = useState(initialContext.resetBoard);
	const value = {
		picked,
		setPicked,
		resetBoard,
		setResetBoard,
	};
	return (
		<PickedContext.Provider value={value}>
			{children}
		</PickedContext.Provider>
	);
};
export default PickedContext;
