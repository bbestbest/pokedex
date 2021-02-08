import React from "react";
import { Link, useHistory } from "react-router-dom";
import UserStatus from "../components/UserStatus";
import { Container, ItemPad, InputFrom } from "../components/ModelPadStyle";

function SignUp() {
  const history = useHistory();
  const handleOnEnter = (event) => {
    if (event.keyCode == 13) {
      alert("Redirect to Login");
      history.push("/login");
    }
  };

  return (
    <>
      <UserStatus>
        <form onKeyDown={handleOnEnter}>
          <h1>Create Pokemon Trainer Account</h1>
          <h3>Username</h3>
          <InputFrom type="text"></InputFrom>
          <h3>Password</h3>
          <InputFrom type="password"></InputFrom>
          <Link to={`/login`}>Already have an account?</Link>
        </form>
      </UserStatus>
    </>
  );
}

export default SignUp;
