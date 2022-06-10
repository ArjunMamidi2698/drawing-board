import { Container, Table, TableBody, TableRow } from "@mui/material";
import { useBoard } from "../../stores/board-context";
import { BoardActions } from "./BoardActions";
import { BoardCell } from "./BoardCell";

export const Board = () => {
	const { tableDimensions } = useBoard();
	return (
		<Container>
			<Table size="small">
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
			<BoardActions />
		</Container>
	);
};
