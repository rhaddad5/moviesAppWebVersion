import React, {useEffect} from "react";
import {getFavouriteMovies} from "../../API/FavouriteMovie";
import {useDispatch, useSelector} from "react-redux";
import "../../styles/movieCards.css";
import "../../styles/favMovies.css";
import {Link} from "react-router-dom";

export default function FavouriteMovies() {

  const dispatch = useDispatch();

  useEffect(() => {
    getFavouriteMovies(dispatch);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const favouriteMovies = useSelector(state => state.favMoviesReducer);

  const usernames = [];
  favouriteMovies.map(movie => usernames.push(movie.user));

  return(
    <div>
      {favouriteMovies[0] ? <h1 className="favTitle">Hi {usernames[0]}! Here is your movie list</h1> : <h1 className="favTitle noFavTitle">Hi! You do not have any movie in your list yet, click <Link to="/">here</Link>   to add some!</h1>}
      <ul className="cards">
        {favouriteMovies.map((movie) => {
          const idPath = `/${movie.tmdbId}`;
          return(
            <Link to={idPath} className="movieLink" key={movie.tmdbId}>
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
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

