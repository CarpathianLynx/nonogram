import React from "react";
import "./game-widget.css";
import FillPickerContainer from "./FillPickerContainer";
import RowConstraintsContainer from "./RowConstraintsContainer";
import ColConstraintsContainer from "./ColConstraintsContainer";
import GridContainer from "./GridContainer";

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
