import { PickerMenu } from "./PickerMenu";
import logo from "../logo.svg";
import "./Header.css";
import { Button } from "@mui/material";
import { usePicked } from "../stores/picked-context";

export const Header = () => {
	const { setResetBoard } = usePicked();
	const handleReset = () => {
		setResetBoard(true);
		setTimeout(() => {
			setResetBoard(false);
		}, 100);
	}
	return (
		<header>
			<img src={logo} width="100px" height="100px" />
			<h2>Drawing Board</h2>
			<div className="spacer" />
			<Button onClick={handleReset}>Reset</Button>
			<PickerMenu />
		</header>
	);
};
