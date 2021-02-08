import React from "react";
import UserStatus from "../components/UserStatus";
import { Container, ItemPad, InputFrom } from "../components/ModelPadStyle";

function Login() {
  return (
    <>
      <UserStatus>
        <InputFrom></InputFrom>
        <InputFrom></InputFrom>
      </UserStatus>
    </>
  );
}

export default Login;
