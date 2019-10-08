import {
  FETCH_FILM_DATA_REQUEST,
  FETCH_FILM_DATA_SUCCESS,
  FETCH_FILM_DATA_FAILURE,
  FETCH_FILM_GENRES_FAILURE,
  FETCH_FILM_GENRES_REQUEST,
  FETCH_FILM_GENRES_SUCCESS
} from "./constants";

export const fetchFilmDataRequest = () => {
  return {
    type: FETCH_FILM_DATA_REQUEST
  };
};

export const fetchFilmDataSuccess = films => {
  return {
    type: FETCH_FILM_DATA_SUCCESS,
    films
  };
};

export const fetchFilmDataFailure = error => {
  return {
    type: FETCH_FILM_DATA_FAILURE,
    error
  };
};

export const fetchFilmGenreRequest = () => {
  return {
    type: FETCH_FILM_GENRES_REQUEST
  };
};

export const fetchFilmGenreSuccess = films => {
  return {
    type: FETCH_FILM_GENRES_SUCCESS,
    films
  };
};

export const fetchFilmGenreFailure = error => {
  return {
    type: FETCH_FILM_GENRES_FAILURE,
    error
  };
};
