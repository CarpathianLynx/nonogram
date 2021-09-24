import Grid from "./Grid";
import FillOption from "./FillOption";
import Constraint from "./Constraint";

export default interface Game {
  grid: Grid;
  colors: FillOption[];
  rowsConstraints: Constraint[][];
}
