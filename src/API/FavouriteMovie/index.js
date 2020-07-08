import axios from "axios";
import {fetchFavouriteMovies} from "../../redux/actions";

export const saveFavouriteMovie = (title, releaseDate, id, overview, imagePath) => {
  const token = sessionStorage.getItem("accessToken");
  const headers = {"Authorization": `Bearer ${token}`};
  axios.post("http://localhost:8000/movies", {title: title, releaseDate: releaseDate, tmdbId: id, overview: overview, imagePath: imagePath}, {headers: headers})
  .then((res) => console.log("REPONSE POST", res))
  .catch((e) => console.log("ERREUR POST", e))
};

export const destroyFavouriteMovie = (id) => {
  axios.delete(`http://localhost:8000/movies/${id}`)
  .then((res) => console.log("REPONSE DELETE", res))
  .catch((e) => console.log("ERREUR DELETE", e))
};

export const getFavouriteMovies = (dispatch) => {
  const token = sessionStorage.getItem("accessToken");
  const headers = {"Authorization": `Bearer ${token}`};
  axios.get("http://localhost:8000/movies",  {headers: headers})
  .then((res) => dispatch(fetchFavouriteMovies(res.data)))
  .catch((e) => console.log("ERREUR GET FAV", e))
};
