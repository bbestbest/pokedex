import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GetLogin } from "../services/FetchData";

export function* fetchUserData(action) {
  console.log(action);
  yield put({ type: "LOADED_USER", payload: action.payload });
}
