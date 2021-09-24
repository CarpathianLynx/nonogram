import { FILL_CELL, SET_FILL_OPTION, SET_GAME } from "./actions";
import CurrentGameState from "./CurrentGameState";
import FillOption, { EMPTY_OPTION } from "../../types/FillOption";
import Game from "../../types/Game";
import Cell from "../../types/Cell";

interface Action {
  game: Game;
  option: FillOption;
  cell: Cell;
  type: string;
}

export default function reducer(
  state: CurrentGameState = {},
  action: Action
): CurrentGameState {
  switch (action.type) {
    case SET_GAME:
      const game = action.game;
      return {
        ...state,
        game,
        options: [
          EMPTY_OPTION,
          ...game.colors.map((value) => ({ value, completed: false })),
        ],
      };
    case SET_FILL_OPTION:
      const option = action.option;
      return {
        ...state,
        currentOption: option,
      };
    case FILL_CELL: {
      const cell = action.cell;
      const currentOption = state.currentOption;

      if (
        state.game!!.grid.cells[cell.row][cell.col].color ===
        currentOption?.value
      ) {
        state.game!!.grid.cells[cell.row][cell.col] = {
          ...cell,
          color: undefined,
        };
      } else {
        state.game!!.grid.cells[cell.row][cell.col] = {
          ...cell,
          color: currentOption?.value,
        };
      }

      return clone(state);
    }
    default:
      return state;
  }
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
