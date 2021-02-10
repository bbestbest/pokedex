export default function UserReducer(state = [], action) {
  switch (action.type) {
    case "LOADED_USER":
      return {
        ...state,
        _id: action._id,
        username: action.username,
        token: action.token,
        pokemon_id: action.pokemon_id,
      };
    case "ADD_USER_LIST":
      return { ...state, 
        pokemon_id: [...state.pokemon_id, action.pokemon_id] 
      };
    default:
      return state;
  }
}
