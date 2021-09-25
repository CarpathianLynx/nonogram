import React from "react";
import "./game-widget.css";
import FillPickerContainer from "../containers/FillPickerContainer";
import RowConstraintsContainer from "../containers/RowConstraintsContainer";
import ColConstraintsContainer from "../containers/ColConstraintsContainer";
import GridContainer from "../containers/GridContainer";

interface GameProps {}

const GameWidget: React.FC<GameProps> = () => {
	return (
		<div className={"game"}>
			<div className={"board"}>
				<div className={"spacer-row-constraints"}>
					<div className={"spacer"} />
					<RowConstraintsContainer />
				</div>
				<div className={"col-constraints-grid"}>
					<ColConstraintsContainer />
					<GridContainer />
				</div>
			</div>
			<FillPickerContainer />
		</div>
	);
};

export default GameWidget;
