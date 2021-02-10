import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import UserListReducer from "./UserListReducer";

export default combineReducers({
  UserReducer,
  UserListReducer,
});
