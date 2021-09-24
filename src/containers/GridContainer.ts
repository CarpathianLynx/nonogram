import { connect } from "react-redux";
import { fillCell } from "../redux/currentGame/actions";
import State from "../redux/State";
import Cell from "../types/Cell";
import GridWidget from "../widgets/GridWidget";

const mapStateToProps = (state: State) => {
  const { grid } = state.currentGame.game!!;
  return {
    grid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCell: (cell: Cell) => dispatch(fillCell(cell)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridWidget);
