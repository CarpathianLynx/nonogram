import Game from "../../types/Game";
import FillOption from "../../types/FillOption";

export default interface CurrentGameState {
	game?: Game;
	currentOption?: FillOption;
	options?: FillOption[];
	isFilling: boolean;
}
