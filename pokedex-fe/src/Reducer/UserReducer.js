export default function UserReducer(state = [], action) {
  switch (action.type) {
    case "LOADED_USER":
      console.log(action.value);
      return { ...state, value: action.value };
    default:
      return state;
  }
}
