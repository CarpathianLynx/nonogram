import { connect } from "react-redux";
import State from "../redux/State";
import "./styles/row-constraints-widget.css";
import ConstraintsWidget, { ConstraintsProps } from "./ConstraintsWidget";
import withExtraClasses from "./WithExtraClasses";

const mapStateToProps = (state: State) => {
	const { rowsConstraints } = state.currentGame.game!!;
	return {
		constraints: rowsConstraints
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const extraClasses = {
	container: "row-constraints",
	group: "row-constraint-group",
	constraint: "row-constraint"
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withExtraClasses<ConstraintsProps>(extraClasses)(ConstraintsWidget));
