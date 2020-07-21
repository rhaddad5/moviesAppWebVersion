const initialState = [];

export const moviesListReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_MOVIES":
      return action.payload.data;
    default:
      return state;
  }
};

