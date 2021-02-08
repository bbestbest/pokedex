import React from "react";
import { Container, ItemPad, InputFrom } from "./ModelPadStyle";

function ModelIpad({ children }) {
  return (
    <Container>
      <ItemPad>{children}</ItemPad>
    </Container>
  );
}

export default ModelIpad;
