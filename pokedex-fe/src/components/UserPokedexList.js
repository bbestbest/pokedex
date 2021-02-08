import React from "react";
import { Container, UserList, Ipad } from "./ModelPadStyle";

function UserPokedexList({ children }) {
  return (
    <Container>
      <Ipad>
        <UserList>{children}</UserList>
      </Ipad>
    </Container>
  );
}

export default UserPokedexList;
