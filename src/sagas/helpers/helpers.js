import { call } from "redux-saga/effects";
import { months } from "../../constants/dateConversion";
import { getMovieDatabaseGenres } from "../../services/filmServices";

export const getReadableDate = date => {
  const dateArray = date.split("-").reverse();
  return `${dateArray[0]} ${months[dateArray[1]]} ${dateArray[2]}`;
};

export const getReadableGenres = (genres, genreIds) =>
  genreIds.map(genreId => genres.find(code => code.id === genreId).name);

export function* getFilmDataFormat(films) {
  const genresList = yield call(getMovieDatabaseGenres);

  return films.map(
    ({ id, original_title, genre_ids, vote_average, overview, release_date, poster_path }) => {
      const releaseDate = getReadableDate(release_date);
      const genres = getReadableGenres(genresList, genre_ids);
      return {
        id,
        title: original_title,
        genres,
        reviewRating: vote_average,
        overview,
        releaseDate,
        poster: poster_path
      };
    }
  );
}
