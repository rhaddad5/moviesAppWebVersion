import {combineReducers} from "redux";
import {moviesListReducer} from "./moviesListReducer";
import {favMoviesReducer} from "./favMoviesReducer";

export default combineReducers({moviesListReducer, favMoviesReducer});
