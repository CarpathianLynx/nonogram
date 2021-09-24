import FillOption from "../../types/FillOption";
import Game from "../../types/Game";
import Cell from "../../types/Cell";

export const SET_FILL_OPTION = "SET_FILL_OPTION";
export const setFillOption = (option: FillOption) => ({
  type: SET_FILL_OPTION,
  option,
});

export const SET_GAME = "SET_GAME";
export const setGame = (game: Game) => ({
  type: SET_GAME,
  game,
});

export const FILL_CELL = "FILL_CELL";
export const fillCell = (cell: Cell) => ({
  type: FILL_CELL,
  cell,
});
