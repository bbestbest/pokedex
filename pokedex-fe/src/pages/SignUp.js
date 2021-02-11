import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { register } from "../Reducer/UserAction";

import UserStatus from "../components/UserStatus";
import { Button, InputForm } from "../components/ModelPadStyle";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (props.state.UserReducer.type === "REGISTERED") {
      history.push("/login");
      props.dispatch({ type: "" });
    }
  });

  const handleUsernameOnChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSignUp = () => {
    try {
      register({ username, password }, props);
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
        <h1>Create Pokemon Trainer Account</h1>
        <h3>Username</h3>
        <InputForm
          placeholder="username . . ."
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameOnChange}
          onKeyDown={handleOnEnter}
        ></InputForm>
        <h3>Password</h3>
        <InputForm
          placeholder="username . . ."
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordOnChange}
          onKeyDown={handleOnEnter}
        ></InputForm>
        <Button onClick={handleOnClick}>Sign Up</Button>
        <Link to={`/login`}>Already have an account?</Link>
      </UserStatus>
    </>
  );
}
const mapState = (state) => {
  return { state: state };
};

export default connect(mapState)(SignUp);
