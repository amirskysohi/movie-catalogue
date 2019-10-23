import { FETCH_FILM_DATA_FAILURE } from "../filmReducer/constants";
import { combineReducers } from "redux";

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA_FAILURE: {
      return { error: action.error };
    }
    default:
      return state;
  }
};

export default combineReducers({ error });
