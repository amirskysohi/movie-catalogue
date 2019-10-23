import { combineReducers } from "redux";

import { FETCH_FILM_DATA_SUCCESS } from "./constants";

const films = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA_SUCCESS: {
      return { films: action.films };
    }
    default:
      return state;
  }
};

export default combineReducers({
  films
});
