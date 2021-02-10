import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* loadUser(action) {
  yield put({ type: "DogeUser", value: action.value });
}
