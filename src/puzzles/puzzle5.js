import { cherry, mustard } from "./colors";
import { createGame } from "./common";

export const rowsConstraints = [
	[mustard(2)],
	[mustard(1), mustard(1)],
	[cherry(2), mustard(1)],
	[cherry(5)],
	[cherry(3)]
];

export const colsConstraints = [
	[cherry(2)],
	[mustard(1), cherry(2)],
	[mustard(1), cherry(2)],
	[mustard(3), cherry(2)],
	[cherry(2)]
];

const game = createGame(rowsConstraints, colsConstraints, [
	"cherry",
	"mustard"
]);

export default game;
