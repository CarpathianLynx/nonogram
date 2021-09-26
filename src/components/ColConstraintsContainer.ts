import { connect } from "react-redux";
import State from "../redux/State";
import "./styles/col-constraints-widget.css";
import ConstraintsWidget, { ConstraintsProps } from "./ConstraintsWidget";
import withExtraClasses from "./WithExtraClasses";

const mapStateToProps = (state: State) => {
	const { colsConstraints } = state.currentGame.game!!;
	return {
		constraints: colsConstraints
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const extraClasses = {
	container: "col-constraints",
	group: "col-constraint-group",
	constraint: "col-constraint"
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withExtraClasses<ConstraintsProps>(extraClasses)(ConstraintsWidget));
