import { createContext, useContext, useState } from "react";

const initialContext = {
	picked: "#000fff",
	setPicked: () => undefined,
};
const PickedContext = createContext(initialContext);
export const usePicked = () => useContext(PickedContext);

export const PickedProvider = ({ children }) => {
	const [picked, setPicked] = useState(initialContext.picked);
	const value = {
		picked,
		setPicked,
	};
	return (
		<PickedContext.Provider value={value}>
			{children}
		</PickedContext.Provider>
	);
};
export default PickedContext;
