import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GetLogin } from "../services/FetchData";

export function* testsu(action) {
  yield put({ type: "LOADED_USER", payload: action.payload });
}
