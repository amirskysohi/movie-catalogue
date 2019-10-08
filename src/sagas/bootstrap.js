import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_FILM_GENRES_REQUEST } from "../reducers/filmReducer/constants";

import { fetchFilmGenreSuccess, fetchFilmGenreFailure } from "../reducers/filmReducer/actions";

import { getMovieDatabaseGenres } from "./helpers/helpers";

function* genreRequest() {
  try {
    const { data } = yield call(getMovieDatabaseGenres);
    yield put(fetchFilmGenreSuccess(data.genres));
  } catch (error) {
    yield put(fetchFilmGenreFailure(error));
  }
}

export default function* filmSaga() {
  yield takeEvery(FETCH_FILM_GENRES_REQUEST, genreRequest);
}
