import {
  FETCH_FILM_DATA_REQUEST,
  FETCH_FILM_DATA_SUCCESS,
  FETCH_FILM_DATA_FAILURE
} from "./constants";

export const fetchFilmDataRequest = () => ({
  type: FETCH_FILM_DATA_REQUEST
});

export const fetchFilmDataSuccess = films => ({
  type: FETCH_FILM_DATA_SUCCESS,
  films
});

export const fetchFilmDataFailure = error => ({
  type: FETCH_FILM_DATA_FAILURE,
  error
});
