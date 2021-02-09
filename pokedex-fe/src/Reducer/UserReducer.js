export default function UserReducer(state = [], action) {
  switch (action.type) {
    case "LOADED_USER":
      return state.concat(action.username);
    default:
      return state;
  }
}
