import filmDataTest from "./filmDataSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([filmDataTest()]);
}
