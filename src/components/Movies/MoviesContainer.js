import React from "react";
import Banner from "../_Shared/Banner";
import MoviesList from "./MoviesList";
import {useSelector} from "react-redux";
import "../../App.css"

export default function MoviesContainer() {

  const movies = useSelector(state => state.moviesListReducer);
  // sessionStorage.setItem("movies", JSON.stringify(movies));
  // const sessionMovies = JSON.parse(sessionStorage.getItem("movies"));

  console.log("MOVIES", movies)

  return(
    <div>
      <Banner/>
      <div className="container">
        <MoviesList movies={movies}/>
      </div>
    </div>
  )
}
