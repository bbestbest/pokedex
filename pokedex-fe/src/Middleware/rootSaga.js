import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { loginUser, registerUser } from "../Middleware/userSaga";
import { userList } from "../Middleware/usersListSaga";

function* watchLoginUser() {
  yield takeEvery("CHECK_USER", loginUser);
}

function* watchRegisterUser() {
  yield takeEvery("REGISTER", registerUser);
}

function* watchLoadUserList() {
  yield takeEvery("CHECK_USER_LIST", userList);
}

export default function* rootSaga() {
  yield all([watchLoginUser(), watchRegisterUser(), watchLoadUserList()]);
}
