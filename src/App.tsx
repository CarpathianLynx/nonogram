import React from "react";
import "./App.css";
import GameWidget from "./components/GameWidget";
import { Provider } from "react-redux";
import store from "./redux/store";
import { setFillOption, setGame } from "./redux/currentGame/actions";
import { EMPTY_OPTION } from "./types/FillOption";
import game from "./puzzles/september26";

store.dispatch(setGame(game));
store.dispatch(setFillOption(EMPTY_OPTION));

function App() {
	return (
		<Provider store={store}>
			<div className={"wrapper"}>
				<GameWidget />
			</div>
		</Provider>
	);
}

export default App;
