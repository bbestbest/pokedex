import { put, select } from "redux-saga/effects";
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
  yield PostRegister("user", action.value);
  yield put({
    type: "REGISTERED",
    value: { username: action.value.username },
  });
}

export function* addPokemons(action) {
  const stateUsers = yield select(getStateUser);
  if (!stateUsers.pokemon_id.includes(action.pokemon_id)) {
    yield put({ type: "ADD_USER_LIST", pokemon_id: action.pokemon_id });
    const newStateUser = yield select(getStateUser);
    yield UpdatePokemons("user", newStateUser);
  }
}
