export const register = (value, props) => {
  props.dispatch({
    type: "REGISTER",
    value: { username: value.username, password: value.password },
  });
};

export const login = (value, props) => {
  props.dispatch({
    type: "CHECK_USER",
    value: { username: value.username, password: value.password },
  });
};

export const status = (value, props) => {
  props.dispatch({
    type: "LOADED_USER",
    value: { _id: value._id, username: value.username, token: value.token },
  });
};

export const checkUserList = (props) => {
  props.dispatch({
    type: "CHECK_USER_LIST",
  });
};

export const userList = (value, props) => {
  props.dispatch({
    type: "LOADED_USER_LIST",
    value: value.users,
  });
};

export const addUserPoke = (props,pokeId) => {
  props.dispatch({
    type: "ADD_USER_LIST_SAGA",
    pokemon_id: pokeId,
  });
}