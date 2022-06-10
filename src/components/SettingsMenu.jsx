import { Settings } from "@mui/icons-material";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Slider,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useBoard } from "../stores/board-context";
import theme from "../themes";
// AJ - TODO - REFACTOR
export const SettingsMenu = () => {
	const [open, setOpen] = useState(false);
	const { tableDimensions, setTableDimensions } = useBoard();
	const [rows, setRows] = useState(tableDimensions[0]);
	const [columns, setColumns] = useState(tableDimensions[1]);
	const handleClick = () => {
		setOpen((prev) => !prev);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleUpdate = () => {
		setTableDimensions([rows, columns]);
		handleClose();
	};
	return (
		<>
			<IconButton onClick={handleClick}>
				<Settings
					id="basic-button"
					aria-controls={open ? "basic-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					sx={{
						color: theme.palette.primary.dark,
					}}
					fontSize="large"
					titleAccess="Color Picker"
				/>
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				sx={{
					".MuiPaper-root": {
						minWidth: "500px",
					},
				}}
			>
				<DialogTitle>Configure</DialogTitle>
				<DialogContent>
					<Box
						display="flex"
						flexDirection="column"
						padding={1}
						sx={{
							"> *": {
								marginBottom: ".5rem",
							},
						}}
					>
						<Typography display="flex">
							Rows
							<Typography color="GrayText" marginLeft=".5rem">
								{rows}
							</Typography>
							<div className="spacer"></div>
							<Box display="flex" alignItems="center">
								<IconButton
									disableRipple
									disabled={rows === 1}
									color="error"
									onClick={() => setRows((prev) => --prev)}
								>
									-
								</IconButton>
								<IconButton
									disableRipple
									disabled={rows === 50}
									color="info"
									onClick={() => setRows((prev) => ++prev)}
								>
									+
								</IconButton>
							</Box>
						</Typography>
						<Slider
							value={rows}
							onChange={(e, val) => setRows(val)}
							valueLabelDisplay="auto"
							min={1}
							max={50}
						/>
						<Typography display="flex">
							Columns
							<Typography color="GrayText" marginLeft=".5rem">
								{columns}
							</Typography>
							<div className="spacer"></div>
							<Box display="flex" alignItems="center">
								<IconButton
									disableRipple
									disabled={columns === 1}
									color="error"
									onClick={() => setColumns((prev) => --prev)}
								>
									-
								</IconButton>
								<IconButton
									disableRipple
									disabled={columns === 100}
									color="info"
									onClick={() => setColumns((prev) => ++prev)}
								>
									+
								</IconButton>
							</Box>
						</Typography>
						<Slider
							value={columns}
							onChange={(e, val) => setColumns(val)}
							valueLabelDisplay="auto"
							min={1}
							max={100}
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button
						variant="contained"
						sx={{ color: "#FFFFFF", marginRight: ".5rem" }}
						onClick={handleUpdate}
					>
						update
					</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
