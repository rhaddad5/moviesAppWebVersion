import React from "react";
import "../../styles/movieList.css";
import {Link} from "react-router-dom";
import "../../styles/movieCards.css";

export default function MoviesList({movies}) {

  return(
    <div className="container">
      <ul className="cards">
        {(movies.map(movie => {
        const imagePath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
        const idPath = `/${movie.id}`;
        return(
          <Link to={idPath} className="movieLink">
            <li className="cards__item">
              <div className="card">
                <div className="card__image card__image--flowers">
                  <img src={imagePath} alt="Movie poster"/>
                </div>
                <div className="card__content">
                  <div className="card__title">{movie.title}</div>
                  <h2 className="card__text">{movie.release_date}</h2>
                  <p className="card__text">{movie.overview}</p>
                </div>
              </div>
            </li>
          </Link>
        )
      }))}
      </ul>
    </div>
  )
}
