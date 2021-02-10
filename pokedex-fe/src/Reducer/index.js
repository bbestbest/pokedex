import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import PokedexReducer from "./PokedexReducer"

export default combineReducers({
  UserReducer,
  PokedexReducer
});
