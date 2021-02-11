import React from "react";
import { Container, Ipad, UserStatusStyle } from "./ModelPadStyle";

function ModelIpad({ children }) {
  return (
    <Container>
      <Ipad>
        <UserStatusStyle>{children}</UserStatusStyle>
      </Ipad>
    </Container>
  );
}

export default ModelIpad;
