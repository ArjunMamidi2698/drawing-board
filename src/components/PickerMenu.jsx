import { HexColorPicker } from "react-colorful";
import { usePicked } from "../stores/picked-context";

export const PickerMenu = () => {
	const { picked, setPicked } = usePicked();
	return <HexColorPicker color={picked} onChange={setPicked} />;
};
