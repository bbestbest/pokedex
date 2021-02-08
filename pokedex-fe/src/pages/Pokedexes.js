import React, { useState, useEffect } from "react";
import { GetData } from "../services/FetchData";
import UserStatus from "../components/UserStatus";

function Pokedexes() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    setUsers(await GetData("user"));
  });

  return (
    <>
      <UserStatus>
        {users.map((userItem, userIndex) => (
          <div key={userIndex}>{userItem.username}</div>
        ))}
      </UserStatus>
    </>
  );
}

export default Pokedexes;
