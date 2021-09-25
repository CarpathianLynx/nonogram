import { connect } from "react-redux";
import FillPicker from "../widgets/FillPicker";
import FillOption from "../types/FillOption";
import { setFillOption } from "../redux/currentGame/actions";
import State from "../redux/State";

const mapStateToProps = (state: State) => {
	const { currentOption, options } = state.currentGame;
	return {
		currentOption: currentOption!!,
		options: options!!
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClickOption: (option: FillOption) => dispatch(setFillOption(option))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FillPicker);
