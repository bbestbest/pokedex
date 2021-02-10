export default function PokedexReducer(state = {}, action) {
    switch (action.type) {
      case 'LOADING_ISLOADING':
        return { ...state, message: 'loading'};
      case 'LOADING_SUCCESS':
        return { ...state, pokeList: action.pokeList ,message: 'complete' }
      case 'LOADING_FAIL':
          return { ...state, message: action.message }
      default:
        return state;
    }
}
  