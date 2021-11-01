import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import users from "./reducers/users";
import thunk from "redux-thunk";
import admin from"./reducers/admin";
import movies from "./reducers/movies"
import showTime from "./reducers/showTime"
const reducer = combineReducers({
  users,
  admin,
  movies,
  showTime,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
