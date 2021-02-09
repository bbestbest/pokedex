import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Addpokemon from "../components/Addpokemon";
import { GetData } from "../services/FetchData";

function Pokemons() {
  const [state, SetState] = useState();
  useEffect(
    () =>
      GetData("pokemon").then((response) => SetState(response)),
    []
  );
  console.log(state);
  const { pokedexId } = useParams();
  return (
    <>
      {state?.map((item) => {
        <Addpokemon
          key={item}
          idParams={pokedexId}
          image={item.cards.details.imageUrl}
          name={item.cards.details.name}
          type={item.cards.details.type}
          atk={item.cards.details.attacks[0].damage}
          hp={item.cards.details.hp}
          res={0}
        >{item.cards.details.name}</Addpokemon>;
      })}
    </>
  );
}

export default Pokemons;
