import React, {useEffect} from "react";
import {getFavouriteMovies} from "../../API/FavouriteMovie";
import {useDispatch, useSelector} from "react-redux";
import "../../styles/movieCards.css";
import FavouriteButton from "../_Shared/FavouriteButton";

export default function FavouriteMovies() {

  const dispatch = useDispatch();

  useEffect(() => {
    getFavouriteMovies(dispatch);
  }, []);

  const favouriteMovies = useSelector(state => state.moviesListReducer);

  const usernames = [];
  favouriteMovies.map(movie => usernames.push(movie.user));

  return(
    <div>
      <h1>Hi {usernames[0]}! Here is your movie list</h1>
      <ul className="cards">
        {favouriteMovies.map((movie) => {
          return(
        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--flowers">
              <img src={movie.imagePath} alt="Movie poster"/>
            </div>
            <div className="card__content">
              <div className="card__title">{movie.title}</div>
              <h2 className="card__text">{movie.releaseDate}</h2>
              <p className="card__text">{movie.overview}</p>
            </div>
          </div>
        </li>
          )
        })}
      </ul>
    </div>
  )
}

