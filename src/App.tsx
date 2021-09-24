import React from "react";
import "./App.css";
import GameWidget from "./widgets/GameWidget";
import { Provider } from "react-redux";
import store from "./redux/store";
import {setFillOption, setGame} from "./redux/currentGame/actions";
import createGame from "./createGame";
import Color from "./types/Color";
import {EMPTY_OPTION} from "./types/FillOption";

const colors: Color[] = ["red", "blue"];

const game = createGame(15, colors);

store.dispatch(setGame(game));
store.dispatch(setFillOption(EMPTY_OPTION));

function App() {
  return (
    <Provider store={store}>
      <div className={"wrapper"}>
        <GameWidget game={game} />
      </div>
    </Provider>
  );
}

export default App;
