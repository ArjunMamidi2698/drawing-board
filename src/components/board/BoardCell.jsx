import { TableCell } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { usePicked } from "../../stores/picked-context";

export const BoardCell = () => {
	const { picked, resetBoard } = usePicked();
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
			onMouseEnter={updateColor}
			size="small"
			sx={{
				border: "1px solid",
				height: "1.5rem",
				background: cellBackground,
			}}
		></TableCell>
	);
};
