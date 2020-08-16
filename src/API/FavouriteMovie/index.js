import axios from "axios";
import {fetchFavouriteMovies} from "../../redux/actions";

export const saveFavouriteMovie = (title, releaseDate, id, overview, imagePath) => {
  const token = sessionStorage.getItem("accessToken");
  const headers = {"Authorization": `Bearer ${token}`};
  axios.post("https://movies-rest-api-web.herokuapp.com/movies", {title: title, releaseDate: releaseDate, tmdbId: id, overview: overview, imagePath: imagePath}, {headers: headers})
  .catch((e) => console.log("ERREUR POST", e))
};

export const destroyFavouriteMovie = (id) => {
  axios.delete(`https://movies-rest-api-web.herokuapp.com/movies/${id}`)
  .catch((e) => console.log("ERREUR DELETE", e))
};

export const getFavouriteMovies = (dispatch) => {
  const token = sessionStorage.getItem("accessToken");
  const headers = {"Authorization": `Bearer ${token}`};
  axios.get("https://movies-rest-api-web.herokuapp.com/movies",  {headers: headers})
  .then((res) => {
    dispatch(fetchFavouriteMovies(res.data))
    sessionStorage.setItem('favMovies', JSON.stringify(res.data));
  })
  .catch((e) => console.log("ERREUR GET FAV", e))
};
