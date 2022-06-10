import { Box, Button, Switch, Typography } from "@mui/material";
import { usePicked } from "../../stores/picked-context";

export const BoardActions = () => {
	const { setResetBoard, drag, setDrag } = usePicked();
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
				<Typography color={!drag ? "primary.dark" : "primary"}>Click to paint</Typography>
				<Switch
					checked={drag}
					onChange={(e) => setDrag(e.target.checked)}
				/>
				<Typography color={drag ? "primary.dark" : "primary"}>Hover to paint</Typography>
			</Box>
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
