import { connect } from "react-redux";
import State from "../redux/State";
import ColConstraintsWidget from "../widgets/ColConstraintsWidget";

const mapStateToProps = (state: State) => {
  const { colsConstraints } = state.currentGame.game!!;
  return {
    constraints: colsConstraints
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColConstraintsWidget);
