export default function UserListReducer(state = [], action) {
  switch (action.type) {
    case "LOADED_USER_LIST":
      return { ...state, value: action.value };
    default:
      return state;
  }
}
