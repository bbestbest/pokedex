import React from "react";
import { useParams } from "react-router-dom";
import UserStatus from "../components/UserStatus";

function PokedexesList() {
  const { id } = useParams();
  return (
    <>
      <UserStatus>PokedexesList = {id}</UserStatus>
    </>
  );
}

export default PokedexesList;
