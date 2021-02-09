import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GetLogin } from "../services/FetchData";

export function* loadUser(action) {
  console.log("This is saga dude")
  console.log(action)
  yield put({ type: "DogeUser", value: action.value });
}
