import { PickerMenu } from "./PickerMenu";
import logo from "../pixelArtLogo.jpg";
import "./Header.css";

export const Header = () => {
	return (
		<header>
			<img src={logo} width="250px" height="130px" />
			<div className="spacer" />
			<PickerMenu />
		</header>
	);
};
