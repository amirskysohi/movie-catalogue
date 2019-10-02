import { FETCH_FILM_DATA } from "./constants";

export const fetchFilmData = films => {
  return {
    type: FETCH_FILM_DATA,
    films
  };
};
