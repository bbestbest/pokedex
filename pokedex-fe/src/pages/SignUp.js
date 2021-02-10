import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../Reducer/UserAction";

import UserStatus from "../components/UserStatus";
import { Container, ItemPad, InputFrom } from "../components/ModelPadStyle";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOnEnter = (event) => {
    if (event.keyCode === 13) {
      try {
        register({ username, password }, props);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <UserStatus>
        <form onKeyDown={handleOnEnter}>
          <h1>Create Pokemon Trainer Account</h1>
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
          <Link to={`/login`}>Already have an account?</Link>
        </form>
      </UserStatus>
    </>
  );
}

export default connect(null)(SignUp);
