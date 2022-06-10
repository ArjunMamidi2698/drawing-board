import { PickerMenu } from "./PickerMenu";
import logo from "../pixelentArtLogo.jpg";
import "./Header.css";
import { SettingsMenu } from "./SettingsMenu";

export const Header = () => {
	return (
		<header>
			<img src={logo} width="250px" height="130px" />
			<div className="spacer" />
			<PickerMenu />
			<SettingsMenu />
		</header>
	);
};
