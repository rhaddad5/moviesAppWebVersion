const initialState = [];

export const movieDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_MOVIE_DETAILS":
      return action.payload.data;
    default:
      return state;
  }
};

