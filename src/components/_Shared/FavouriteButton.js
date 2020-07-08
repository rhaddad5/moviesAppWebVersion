import React, {useState} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import "../../styles/favouriteButton.css";
import {saveFavouriteMovie} from "../../API/FavouriteMovie";
import {destroyFavouriteMovie} from "../../API/FavouriteMovie";

library.add(fasStar, farStar);

export default function FavouriteButton({movieTitle, movieDate, movieId, movieOverview, movieImagePath}) {

  const [fav, setFav] = useState(false);

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
