const initialState = [];

export const loggedInReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGGED_IN_USER":
      return action.payload.data;
    case "LOGGED_OUT_USER":
      return action.payload.data;
    default:
      return state;
  }
};

