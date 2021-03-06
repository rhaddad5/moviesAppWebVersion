import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieDetailsSearch} from "../../API/MovieSearch";
import "../../styles/movieDetails.css";
import "../../styles/movieCards.css";
import FavouriteButton from "../_Shared/FavouriteButton";

export default function MovieDetails() {

  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(() => {
    movieDetailsSearch(id, dispatch);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const movieInfo = useSelector(state => state.movieDetailsReducer);

  const imagePath = `https://image.tmdb.org/t/p/w400/${movieInfo.poster_path}`;

  return(
    <div className="movieDetails container">
        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--flowers">
              <img src={imagePath} alt="Movie poster"/>
            </div>
            <div className="card__content">
              <div className="card__title">{movieInfo.title}</div>
              <h2 className="card__text">{movieInfo.release_date}</h2>
              <p className="card__text">{movieInfo.overview}</p>
              {sessionStorage.getItem("accessToken") ? <FavouriteButton className="star" movieTitle={movieInfo.title} movieDate={movieInfo.release_date} movieId={id} movieOverview={movieInfo.overview} movieImagePath={imagePath}/> : ""}
            </div>
          </div>
        </li>
    </div>
  )
}




