import { Button, Container, Table, TableBody, TableRow } from "@mui/material";
import { useBoard } from "../../stores/board-context";
import { BoardActions } from "./BoardActions";
import { BoardCell } from "./BoardCell";
import { toPng } from "html-to-image";
import { useCallback, useRef } from "react";

export const Board = () => {
	const { tableDimensions } = useBoard();
	const ref = useRef(null);
	const onButtonClick = useCallback(() => {
		if (ref.current === null) {
			return;
		}
		toPng(ref.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = "pixelent-art.png";
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			});
	}, [ref]);

	return (
		<Container>
			<Table size="small" ref={ref}>
				<TableBody>
					{Array(tableDimensions[0])
						.fill(1)
						.map((e, index) => (
							<TableRow key={index}>
								{Array(tableDimensions[1])
									.fill(1)
									.map((e, index) => (
										<BoardCell key={index} />
									))}
							</TableRow>
						))}
				</TableBody>
			</Table>
			<BoardActions onDownload={onButtonClick} />
		</Container>
	);
};
