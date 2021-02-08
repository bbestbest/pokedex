import React from "react";
import { Link, useHistory } from "react-router-dom";
import UserStatus from "../components/UserStatus";
import { Container, ItemPad, InputFrom } from "../components/ModelPadStyle";

function Login() {
  const history = useHistory();
  const handleOnEnter = (event) => {
    if (event.keyCode == 13) {
      alert("Redirect to pokedexes");
      history.push("/pokedexes");
    }
  };

  return (
    <>
      <UserStatus>
        <form onKeyDown={handleOnEnter}>
          <h1>Sign In to Pokemon Trainer Account</h1>
          <h3>Username</h3>
          <InputFrom type="text" id="username" name="username"></InputFrom>
          <h3>Password</h3>
          <InputFrom type="password" id="password" name="password"></InputFrom>
          <Link to={`/signup`}>Don't have an account?</Link>
        </form>
      </UserStatus>
    </>
  );
}

export default Login;
