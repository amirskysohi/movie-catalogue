import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_FILM_DATA_REQUEST } from "../reducers/filmReducer/constants";

import { fetchFilmDataFailure, fetchFilmDataSuccess } from "../reducers/filmReducer/actions";

import { getMovieDatabase, getReadableData, getMovieDatabaseGenres } from "./helpers/helpers";

function* filmDataRequest() {
  try {
    const { data } = yield call(getMovieDatabase);
    const genres = yield call(getMovieDatabaseGenres);
    console.log(genres.data.genres);

    const filmData = data.results.map(
      ({ id, original_title, genre_ids, vote_average, overview, release_date }) => {
        const releaseDate = getReadableData(release_date);

        return {
          id,
          title: original_title,
          genres: genre_ids,
          reviewRating: vote_average,
          overview,
          releaseDate
        };
      }
    );

    yield put(fetchFilmDataSuccess(filmData));
  } catch (error) {
    yield put(fetchFilmDataFailure(error));
  }
}

export default function* filmSaga() {
  yield takeEvery(FETCH_FILM_DATA_REQUEST, filmDataRequest);
}
