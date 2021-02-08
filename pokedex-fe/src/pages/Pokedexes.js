import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetData } from "../services/FetchData";
import UserList from "../components/UserPokedexList";

function Pokedexes() {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    setUsers(await GetData("user"));
  });

  return (
    <>
      <UserList>
        <h1>Pokedexes</h1>
        {users.map((userItem, userIndex) => (
          <Link key={userIndex} to={`/pokedexes/${userIndex + 1}`}>
            {userItem.username}
          </Link>
        ))}
      </UserList>
    </>
  );
}

export default Pokedexes;
