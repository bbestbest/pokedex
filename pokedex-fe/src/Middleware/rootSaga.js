import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { loginUser, registerUser } from "../Middleware/userSaga";
import { userList } from "../Middleware/usersListSaga";
import { fetchPokemon } from "../Middleware/pokemonSaga";

function* watchLoginUser() {
  yield takeEvery("CHECK_USER", loginUser);
}

function* watchRegisterUser() {
  yield takeEvery("REGISTER", registerUser);
}

function* watchLoadUserList() {
  yield takeEvery("CHECK_USER_LIST", userList);
}

function* watchPokemonList() {
  yield takeEvery("LOADING_ISLOADING", fetchPokemon);
}

export default function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchRegisterUser(),
    watchLoadUserList(),
    watchPokemonList(),
  ]);
}
