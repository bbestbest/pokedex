import { act } from "react-dom/test-utils";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
<<<<<<< HEAD

export function* loadUser(action) {
  yield put({ type: "DogeUser", value: action.value });
=======
import { status } from "../Reducer/UserAction";
import { GetLogin, PostRegister } from "../services/FetchData";

export function* loginUser(action) {
  console.log(action);
  const userData = yield GetLogin("login", action.value);
  yield put({
    type: "LOADED_USER",
    value: { username: action.value.username, token: userData },
  });
}

export function* registerUser(action) {
  console.log(action.value);
  const userData = yield PostRegister("user", action.value);
  yield put({
    type: "LOADED_USER",
    value: { username: action.value.username, token: userData },
  });
>>>>>>> 101f12f42bc5310a9ec66cd1227d8f9842272afc
}
