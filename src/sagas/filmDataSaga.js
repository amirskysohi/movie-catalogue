import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_FILM_DATA_REQUEST } from "../reducers/filmReducer/constants";

import { fetchFilmDataFailure, fetchFilmDataSuccess } from "../reducers/filmReducer/actions";

import { getMovieDatabase } from "../services/filmServices";
import { getFilmDataFormat } from "./helpers/helpers";

function* filmDataRequest() {
  try {
    const results = yield call(getMovieDatabase);

    const filmData = yield call(getFilmDataFormat, results);

    yield put(fetchFilmDataSuccess(filmData));
  } catch (error) {
    yield put(fetchFilmDataFailure(error));
  }
}

export default function* filmSaga() {
  yield takeEvery(FETCH_FILM_DATA_REQUEST, filmDataRequest);
}
