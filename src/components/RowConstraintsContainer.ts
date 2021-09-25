import { connect } from "react-redux";
import State from "../redux/State";
import RowConstraintsWidget from "./RowConstraintsWidget";

const mapStateToProps = (state: State) => {
	const { rowsConstraints } = state.currentGame.game!!;
	return {
		constraints: rowsConstraints
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RowConstraintsWidget);
