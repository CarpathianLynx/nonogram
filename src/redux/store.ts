import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./currentGame/reducer";
import State from "./State";

const store = createStore<State, any, any, any>(
  combineReducers({
    currentGame: reducer,
  }),
  applyMiddleware(logger)
);

export default store;
