import React, {useState, useEffect} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import "../../styles/favouriteButton.css";
import {useDispatch, useSelector} from "react-redux";
import {saveFavouriteMovie, destroyFavouriteMovie, getFavouriteMovies} from "../../API/FavouriteMovie";

library.add(fasStar, farStar);

export default function FavouriteButton({movieTitle, movieDate, movieId, movieOverview, movieImagePath}) {

  const [fav, setFav] = useState(undefined);

  useEffect(() => {
    isFav();
  }, []);

  const dispatch = useDispatch();

  let favMovie = [];

  const isFav = () => {
    getFavouriteMovies(dispatch);
    const favouriteMovies = JSON.parse(sessionStorage.getItem("favMovies"));
    if(favouriteMovies) {
      favouriteMovies.forEach((movie) => {
        if((movie.tmdbId === parseInt(movieId, 10))) {
          favMovie.push(true);
        }
      });
      if(favMovie[0]) {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }

  const toggleFavStatus = () => {
    setFav(!fav);
    if(!fav) {
      saveFavouriteMovie(movieTitle, movieDate, movieId, movieOverview, movieImagePath);
    } else {
      destroyFavouriteMovie(movieId);
    }
  };

  return(
    <div className="icon">
    {fav ? <FontAwesomeIcon icon={fasStar} onClick={toggleFavStatus}/> : <FontAwesomeIcon icon={farStar} onClick={toggleFavStatus}/>}
    </div>
  )
}
