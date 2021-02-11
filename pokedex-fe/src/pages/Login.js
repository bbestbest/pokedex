import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { checkUserList, login } from "../Reducer/UserAction";

import UserStatus from "../components/UserStatus";
import { InputForm, Button } from "../components/ModelPadStyle";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (props.state.UserReducer._id !== undefined) {
      history.push("/pokedexes");
    }
  });

  const handleUsernameOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOnLogin = () => {
    try {
      login({ username, password }, props);
      checkUserList(props);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClick = () => {
    handleOnLogin();
  };

  const handleOnEnter = (event) => {
    if (event.keyCode === 13) {
      handleOnLogin();
    }
  };

  return (
    <>
      <UserStatus>
        <form onKeyDown={handleOnEnter}>
          <h1>Sign In to Pokemon Trainer Account</h1>
          <h3>Username</h3>
          <InputForm
            placeholder="username . . ."
            type="text"
            id="username"
            name="username"
            onChange={handleUsernameOnChange}
          ></InputForm>
          <h3>Password</h3>
          <InputForm
            placeholder="username . . ."
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordOnChange}
          ></InputForm>
          <Button onClick={handleOnClick}>Sign In</Button>
          <Link to={`/signup`}>Don't have an account?</Link>
        </form>
      </UserStatus>
    </>
  );
}

const mapState = (state) => {
  return { state: state };
};

export default connect(mapState)(Login);
