import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { testsu } from "../Middleware/userSaga";

export default function* rootSaga() {
  yield all([testsu()]);
}
