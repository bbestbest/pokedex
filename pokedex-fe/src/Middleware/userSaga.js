import { act } from "react-dom/test-utils";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { status } from "../Reducer/UserAction";
import { GetLogin, PostRegister } from "../services/FetchData";

export function* loginUser(action) {
  const userData = yield GetLogin("login", action.value);
  yield put({
    type: "LOADED_USER",
    value: {
      _id: userData._id,
      username: action.value.username,
      token: userData,
    },
  });
}

export function* registerUser(action) {
  const userData = yield PostRegister("user", action.value);
  yield put({
    type: "LOADED_USER",
    value: { username: action.value.username, token: userData },
  });
}
