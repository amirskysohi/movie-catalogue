import { takeEvery } from "redux-saga/effects";

export const filmDataTest = () => {
  console.log("hello");
};

export default function* filmSaga() {
  yield takeEvery("FETCH_FILM_DATA", filmDataTest);
}
