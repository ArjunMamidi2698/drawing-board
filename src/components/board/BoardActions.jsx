import { Box, Button, Switch, Typography } from "@mui/material";
import { useBoard } from "../../stores/board-context";

export const BoardActions = ({ onDownload }) => {
	const { setResetBoard, drag, setDrag } = useBoard();
	const handleReset = () => {
		setResetBoard(true);
		setTimeout(() => {
			setResetBoard(false);
		}, 100);
	};
	return (
		<Box
			display="flex"
			alignItems="center"
			marginTop="1rem"
			justifyContent="space-around"
			sx={{
				"> *": {
					alignItems: "center",
				},
			}}
		>
			<Box display="flex">
				<Typography color={!drag ? "primary.dark" : "primary"}>
					Click to paint
				</Typography>
				<Switch
					checked={drag}
					onChange={(e) => setDrag(e.target.checked)}
				/>
				<Typography color={drag ? "primary.dark" : "primary"}>
					Hover to paint
				</Typography>
			</Box>
			<Button
				variant="contained"
				onClick={onDownload}
				sx={{
					color: "#FFFFFF",
				}}
			>
				Download
			</Button>
			<Button
				variant="contained"
				onClick={handleReset}
				sx={{
					color: "#FFFFFF",
				}}
			>
				Reset
			</Button>
		</Box>
	);
};
