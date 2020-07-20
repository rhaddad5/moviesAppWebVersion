const initialState = [];

export const favMoviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_FAVOURITE_MOVIES":
      return action.payload.data;
    default:
      return state;
  }
};

