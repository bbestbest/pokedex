import React from "react";
import {
  Container,
  // ItemPadContent,
  SearchFrom,
  // BoxImage,
  // BoxData,
  // BoxTextPokemon,
} from "./ModelPadStyle";

function Addpokemon(props, { children }) {
  return (
    <Container>
      {/* <ItemPadContent> */}
      <h1>Add pokemon to pokedex #{props.idParams}</h1>
      <SearchFrom />
      {/* <BoxData> */}
      {/* <BoxImage image={props.image} /> */}
      {/* <BoxTextPokemon> */}
      <div>Name :{props.name}</div>
      <div>Type :{props.type}</div>
      <div>Hp:{props.hp}</div>
      <div>Atk:{props.atk}</div>
      <div>Res:{props.res}</div>
      {/* </BoxTextPokemon> */}
      {/* </BoxData> */}
      {/* </ItemPadContent> */}
    </Container>
  );
}

export default Addpokemon;
