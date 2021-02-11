import React from "react";
import {
  BoxData,
  BoxTextPokemon,
  BoxImage

} from "./ModelPadStyle";

function AddPokemon(props, { children }) {
  return (
    <BoxData>
      <BoxImage src={props.image} />
      <BoxTextPokemon>
        <h2>{props.name}</h2>
        <h3> Type :{props.type}</h3>
        <h3>ATK :{props.atk}</h3>
        <h3>HP :{props.hp}</h3>
        <h3>RES :{props.res}</h3>
        {props.button ? <button onClick={props.button}>ADD Pokemon</button> : null}
      </BoxTextPokemon>
    </BoxData>
  );
}

export default AddPokemon;
