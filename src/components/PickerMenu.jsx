import { Colorize } from "@mui/icons-material";
import { IconButton, Menu } from "@mui/material";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { usePicked } from "../stores/picked-context";
import theme from "../themes";

export const PickerMenu = () => {
	const { picked, setPicked } = usePicked();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<IconButton onClick={handleClick}>
				<Colorize
					id="basic-button"
					aria-controls={open ? "basic-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					sx={{
						color: theme.palette.primary.dark,
						borderBottom: `.5rem solid ${picked}`,
					}}
					fontSize="large"
					titleAccess="Color Picker"
				/>
			</IconButton>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<HexColorPicker color={picked} onChange={setPicked} />
			</Menu>
		</>
	);
};
