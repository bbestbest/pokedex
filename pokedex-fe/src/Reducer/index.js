import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import PokedexReducer from "./PokedexReducer"
import UserListReducer from "./UserListReducer";

export default combineReducers({
  UserReducer,
  PokedexReducer,
  UserListReducer,
});
