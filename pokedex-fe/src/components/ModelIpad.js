import React from "react";
import { Container, Ipad, UserStatus } from "./ModelPadStyle";

function ModelIpad({ children }) {
  return (
    <Container>
      <Ipad>
        <UserStatus>{children}</UserStatus>
      </Ipad>
    </Container>
  );
}

export default ModelIpad;
