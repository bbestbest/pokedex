import React from "react";
import {
  BoxData,
  BoxTextPokemon,
  BoxImage

} from "./ModelPadStyle";

function AddPokemon(props, { children }) {
  return (
    <BoxData>
      <BoxImage image={props.image} />
      <BoxTextPokemon>
        <div>{props.name}</div>
        <div>{props.type}</div>
        <div>{props.atk}</div>
        <div>{props.hp}</div>
        <div>{props.res}</div>
      </BoxTextPokemon>
    </BoxData>
  );
}

export default AddPokemon;
