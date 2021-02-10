import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { loadUser } from "../Middleware/userSaga";

function* watchLoadUser() {
  yield takeEvery("LOADED_USER", loadUser);
}
function* watchDoge() {
  yield takeEvery("DogeUser", () => console.log("Doge"));
}

export default function* rootSaga() {
  yield all([watchLoadUser(), watchDoge()]);
}
