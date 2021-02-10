import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GetData } from "../services/FetchData"

export function* fetchPokemon() {
    try {
        const pokeList = yield GetData('pokemon');
        yield put({type: 'LOADING_SUCCESS' , pokeList: pokeList});

    } catch (error) {
        yield put({type: 'LOADING_FAIL', message: error.message});
    }
}