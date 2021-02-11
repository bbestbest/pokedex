import React from "react";
import { Container, UserList, Ipad } from "./ModelPadStyle";

function UserPokedexList({center, children }) {
  return (
    <Container>
      <Ipad center={center}>
        <UserList>{children}</UserList>
      </Ipad>
    </Container>
  );
}

export default UserPokedexList;
