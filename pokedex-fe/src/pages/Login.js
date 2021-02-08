import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserStatus from "../components/UserStatus";
import { Container, ItemPad, InputFrom } from "../components/ModelPadStyle";
import { GetLogin } from "../services/FetchData";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUsernameOnChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordOnChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOnEnter = async (event) => {
    console.log("username: " + username);
    console.log("password: " + password);
    if (event.keyCode == 13) {
      alert("Redirect to pokedexes");
      await GetLogin("login", { username: username, password: password });
      history.push("/pokedexes");
    }
  };

  return (
    <>
      <UserStatus>
        <form onKeyDown={handleOnEnter}>
          <h1>Sign In to Pokemon Trainer Account</h1>
          <h3>Username</h3>
          <InputFrom
            type="text"
            id="username"
            name="username"
            onChange={handleUsernameOnChange}
          ></InputFrom>
          <h3>Password</h3>
          <InputFrom
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordOnChange}
          ></InputFrom>
          <Link to={`/signup`}>Don't have an account?</Link>
        </form>
      </UserStatus>
    </>
  );
}

export default Login;
