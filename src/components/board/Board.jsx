import { Container, Table, TableBody, TableRow } from "@mui/material";
import { BoardCell } from "./BoardCell";

export const Board = () => {
	return (
		<Container>
			<Table size="small">
				<TableBody>
					{Array(20)
						.fill(1)
						.map((e, index) => (
							<TableRow key={index}>
								{Array(15)
									.fill(1)
									.map((e, index) => (
										<BoardCell key={index} />
									))}
							</TableRow>
						))}
				</TableBody>
			</Table>
		</Container>
	);
};
