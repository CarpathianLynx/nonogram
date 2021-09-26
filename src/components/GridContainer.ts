import { connect } from "react-redux";
import { setFilling } from "../redux/currentGame/actions";
import State from "../redux/State";
import Cell from "../types/Cell";
import GridWidget from "./GridWidget";
import { clickFillCell, glideFillCell } from "../redux/currentGame/thunks";

const mapStateToProps = (state: State) => {
	const { grid } = state.currentGame.game!!;
	return {
		grid
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onMouseDown: ({ row, col }: Cell) => {
			dispatch(setFilling(true));
			dispatch(clickFillCell(row, col));
		},
		onMouseUp: () => {
			dispatch(setFilling(false));
		},
		onMouseEnter: ({ row, col }: Cell) => {
			dispatch(glideFillCell(row, col));
		},
		onMouseLeave: () => {
			dispatch(setFilling(false));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GridWidget);
