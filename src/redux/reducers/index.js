import {combineReducers} from "redux";
import {moviesListReducer} from "./moviesListReducer";
import {favMoviesReducer} from "./favMoviesReducer";
import {movieDetailsReducer} from "./movieDetailsReducer";
import {loggedInReducer} from "./loggedInReducer";

export default combineReducers({moviesListReducer, favMoviesReducer, movieDetailsReducer, loggedInReducer});
