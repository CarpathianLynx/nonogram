import Color from "./Color";

export const EMPTY = "EMPTY";

export const EMPTY_OPTION = {
  value: EMPTY,
  completed: false,
};

export type EmptyOption = typeof EMPTY_OPTION;

export interface ColorOption {
  value: Color;
  completed: boolean;
}

type FillOption = EmptyOption | ColorOption;

export default FillOption;
