import React, {useState, useEffect, useLayoutEffect} from "react";
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
    console.log(favMovie)
  }, []);

  const dispatch = useDispatch();

  const favouriteMovies = useSelector(state => state.favMoviesReducer);
  console.log(favouriteMovies)
  let favMovie = [];

  const isFav = () => {
    console.log("coucou")
    console.log(typeof parseInt(movieId, 10))
    getFavouriteMovies(dispatch);
    favouriteMovies.forEach((movie) => {
      console.log('hello')
      console.log(typeof movie.tmdbId)
      console.log(movie.tmdbId === parseInt(movieId, 10))
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

    console.log(fav)

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
