import { TableCell } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useBoard } from "../../stores/board-context";
import { usePicked } from "../../stores/picked-context";
import theme from "../../themes";

export const BoardCell = () => {
	const { picked } = usePicked();
	const { resetBoard, drag } = useBoard();
	const [cellBackground, setCellBackground] = useState();
	const updateColor = useCallback(() => {
		setCellBackground(picked);
	}, [picked]);
	useEffect(() => {
		if (resetBoard) {
			setCellBackground("#FFFFFF");
		}
	}, [resetBoard]);
	return (
		<TableCell
			onMouseEnter={drag ? updateColor : undefined}
			onClick={!drag ? updateColor : undefined}
			size="small"
			sx={{
				border: `1px solid ${theme.palette.primary.main}`,
				height: "1.5rem",
				background: cellBackground,
			}}
		></TableCell>
	);
};
