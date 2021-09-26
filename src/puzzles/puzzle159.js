import { lightBlue, yellow, darkBlue, burgundy, pink } from "./colors";
import { createGame } from "./common";

const rowsConstraints = [
	[burgundy(6)],
	[lightBlue(5), burgundy(3)],
	[lightBlue(1), yellow(5), lightBlue(1), burgundy(2)],
	[lightBlue(1), yellow(2), lightBlue(5), yellow(1), burgundy(3)],
	[
		lightBlue(2),
		yellow(1),
		lightBlue(1),
		lightBlue(1),
		lightBlue(1),
		burgundy(3)
	],
	[
		lightBlue(2),
		yellow(1),
		lightBlue(1),
		lightBlue(1),
		lightBlue(1),
		burgundy(3)
	],
	[lightBlue(2), darkBlue(1), pink(3), pink(1), darkBlue(1), burgundy(1)],
	[lightBlue(2), darkBlue(1), pink(1), pink(1), pink(1)],
	[lightBlue(2), darkBlue(1), pink(5), darkBlue(1)],
	[lightBlue(2), pink(5)],
	[lightBlue(2), yellow(1), darkBlue(1), pink(3), darkBlue(1), yellow(1)],
	[lightBlue(2), yellow(2), darkBlue(1), darkBlue(1), yellow(3)],
	[lightBlue(2), yellow(2), darkBlue(2), darkBlue(2), yellow(3)],
	[yellow(4), darkBlue(8), yellow(1)],
	[yellow(2), darkBlue(1), darkBlue(4), darkBlue(1)]
];

const colsConstraints = [
	[yellow(1)],
	[lightBlue(9), yellow(2)],
	[lightBlue(10), yellow(2)],
	[yellow(3), darkBlue(1)],
	[yellow(3), yellow(3)],
	[lightBlue(1), yellow(1), darkBlue(3), darkBlue(3)],
	[lightBlue(1), yellow(1), lightBlue(3), pink(4), darkBlue(2)],
	[lightBlue(1), yellow(1), lightBlue(1), pink(1), pink(3), darkBlue(1)],
	[burgundy(1), lightBlue(1), yellow(1), lightBlue(3), pink(5), darkBlue(1)],
	[burgundy(1), lightBlue(1), yellow(1), lightBlue(1), pink(3), darkBlue(2)],
	[burgundy(1), lightBlue(1), yellow(1), lightBlue(3), pink(4), darkBlue(3)],
	[
		burgundy(2),
		lightBlue(1),
		yellow(1),
		darkBlue(1),
		darkBlue(1),
		darkBlue(5)
	],
	[burgundy(6), yellow(3), darkBlue(2)],
	[burgundy(7), yellow(2), darkBlue(1)],
	[burgundy(3), yellow(3), darkBlue(1)]
];

const game = createGame(rowsConstraints, colsConstraints, [
	"burgundy",
	"yellow",
	"darkBlue",
	"lightBlue",
	"pink"
]);

export default game;
