import { combineReducers } from "redux";
import {
  FETCH_FILM_DATA_REQUEST,
  FETCH_FILM_DATA_SUCCESS,
  FETCH_FILM_DATA_FAILURE
} from "../filmReducer/constants";

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA_REQUEST: {
      return true;
    }
    case FETCH_FILM_DATA_SUCCESS:
    case FETCH_FILM_DATA_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

export default combineReducers({ loading });
