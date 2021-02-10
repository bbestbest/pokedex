import { act } from "react-dom/test-utils";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GetData } from "../services/FetchData";

export function* userList(action) {
  console.log(action);
  const userData = yield GetData("user");
  yield put({
    type: "LOADED_USER_DATA",
    value: userData,
  });
}
