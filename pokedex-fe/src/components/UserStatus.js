import React from "react";
import { Container, Ipad, UserStatusStyle } from "./ModelPadStyle";
function UserStatus({ children }) {
  return (
    <Container>
      <Ipad>
        <UserStatusStyle>{children}</UserStatusStyle>
      </Ipad>
    </Container>
  );
}

export default UserStatus;
