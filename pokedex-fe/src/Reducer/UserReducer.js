export default function UserReducer(state = [], action) {
  switch (action.type) {
    case "LOADED_USER":
      console.log(action);
      return { ...state, value: action.value };
    default:
      return state;
  }
}
