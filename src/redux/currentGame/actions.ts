import FillOption from "../../types/FillOption";
import Game from "../../types/Game";

export const SET_FILL_OPTION = "SET_FILL_OPTION";
export const setFillOption = (option: FillOption) => ({
  type: SET_FILL_OPTION,
  option
});

export const SET_GAME = "SET_GAME";
export const setGame = (game: Game) => ({
  type: SET_GAME,
  game
});

export const FILL_CELL = "FILL_CELL";
export const fillCell = (row: number, col: number) => ({
  type: FILL_CELL,
  row,
  col
});

export const SET_FILLING = "SET_FILLING";
export const setFilling = (isFilling: boolean) => ({
  type: SET_FILLING,
  isFilling
});
