import { act } from "react-dom/test-utils";
import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { status } from "../Reducer/UserAction";
import { GetLogin, PostRegister, UpdatePokemons } from "../services/FetchData";

export const getStateUser = (state) => state.UserReducer;

export function* loginUser(action) {
  const userData = yield GetLogin("login", action.value);
  yield put({
    type: "LOADED_USER",
    _id: userData._id,
    username: userData.username,
    token: userData.token,
    pokemon_id: userData.pokemon_id,
  });
}

export function* registerUser(action) {
  const userData = yield PostRegister("user", action.value);
  yield put({
    type: "REGISTERED",
    value: { username: action.value.username },
  });
}

export function* addPokemons(action) {
  yield put({ type: "ADD_USER_LIST", pokemon_id: action.pokemon_id });
  const stateUser = yield select(getStateUser);
  yield UpdatePokemons("user", stateUser);
}
