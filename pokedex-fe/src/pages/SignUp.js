import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { register } from "../Reducer/UserAction";

import UserStatus from "../components/UserStatus";
import { Button, InputForm } from "../components/ModelPadStyle";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUsernameOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSignUp = () => {
    try {
      register({ username, password }, props);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClick = () => {
    handleOnSignUp();
  };

  const handleOnEnter = (event) => {
    if (event.keyCode === 13) {
      handleOnSignUp();
    }
  };

  return (
    <>
      <UserStatus>
        <form onKeyDown={handleOnEnter}>
          <h1>Create Pokemon Trainer Account</h1>
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
          <Button onClick={handleOnClick}>Sign Up</Button>
          <Link to={`/login`}>Already have an account?</Link>
        </form>
      </UserStatus>
    </>
  );
}

export default connect(null)(SignUp);
