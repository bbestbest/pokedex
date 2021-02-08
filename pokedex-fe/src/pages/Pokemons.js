import React from "react";
import { useParams } from "react-router-dom";
import Addpokemon from "../components/Addpokemon";

function Pokemons() {
  const { pokedexId } = useParams();
  return (
    <>
      <Addpokemon
        idParams={pokedexId}
        image={"https://images.pokemontcg.io/ex8/98.png"}
        name={"Doge"}
        type={"DogCoin"}
        atk={12232}
        hp={112}
        res={0}
      ></Addpokemon>
    </>
  );
}

export default Pokemons;
