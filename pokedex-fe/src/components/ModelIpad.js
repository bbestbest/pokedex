import React from "react";
import { Container, Ipad, PokemonList } from "./ModelPadStyle";

function ModelIpad({ children, pokedexId }) {
  return (
    <Container>
      <Ipad>
        <PokemonList>{children}</PokemonList>
      </Ipad>
    </Container>
  );
}
export default ModelIpad;
