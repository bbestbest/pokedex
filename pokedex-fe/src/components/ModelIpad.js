import React from "react";
import { Container, ItemPad } from "./ModelPadCSS";

function ModelIpad({ children }) {
  return (
    <Container>
      <ItemPad>{children}</ItemPad>
    </Container>
  );
}

export default ModelIpad;
