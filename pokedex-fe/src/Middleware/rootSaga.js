import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { loadUser } from "../Middleware/userSaga";
import { fetchPokemon } from "../Middleware/pokemonSaga"

function* watchLoadUser() {
  yield takeEvery('LOADED_USER',loadUser)
}
function* watchDoge() {
  yield takeEvery('DogeUser', () => console.log('Doge'))
}

function* watchPokemonList() {
  yield takeEvery('LOADING_ISLOADING', fetchPokemon)
}

export default function* rootSaga() {
  yield all([watchLoadUser(),watchDoge(),watchPokemonList()]);
}
