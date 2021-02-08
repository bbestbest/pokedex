import React from "react";
import { useParams } from "react-router-dom";
import UserStatus from "../components/UserStatus";

function Pokemons() {
  const { pokedexId } = useParams();
  return (
    <>
      <UserStatus>Pokedex ID = {pokedexId}</UserStatus>
    </>
  );
}

export default Pokemons;
