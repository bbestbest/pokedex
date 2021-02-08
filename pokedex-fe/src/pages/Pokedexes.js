import React, { useEffect } from "react";
import { GetData } from "../services/FetchData";
import UserStatus from "../components/UserStatus";

function Pokedexes() {
  useEffect(async () => {
    const users = await GetData("user");
  });

  return (
    <>
      <UserStatus></UserStatus>
    </>
  );
}

export default Pokedexes;
