import { combineReducers } from "redux";

import { FETCH_FILM_DATA_SUCCESS, FETCH_FILM_GENRES_FAILURE } from "./constants";

const filmState = {};

const genreState = {};

const films = (state = filmState, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA_SUCCESS: {
      return { ...state, films: action.films };
    }
    default:
      return state;
  }
};

const genres = (state = genreState, action) => {
  switch (action.type) {
    case FETCH_FILM_GENRES_FAILURE: {
      return { ...state, genres: action.genres };
    }
    default:
      return state;
  }
};

export default combineReducers({
  films,
  genres
});
