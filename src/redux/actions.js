export const fetchMovies = (data) => ({
  type: "ADD_MOVIES",
  payload: {
    data
  }
});

export const fetchMovieDetails = (data) => ({
  type: "ADD_MOVIE_DETAILS",
  payload: {
    data
  }
});

export const fetchFavouriteMovies = (data) => ({
  type: "ADD_FAVOURITE_MOVIES",
  payload: {
    data
  }
});

export const checkIfUserLoggedIn = (data) => ({
  type: "LOGGED_IN_USER",
  payload: {
    data
  }
});

export const checkIfUserLoggedOut = (data) => ({
  type: "LOGGED_OUT_USER",
  payload: {
    data
  }
});
