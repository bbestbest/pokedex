import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchUserData } from "../Middleware/userSaga";

function* userSaga() {
  yield takeEvery({ type: "CHECK_USER" }, fetchUserData);
}

export default function* rootSaga() {
  yield all([userSaga()]);
}
