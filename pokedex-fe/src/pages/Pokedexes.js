import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { GetData } from "../services/FetchData";
import UserList from "../components/UserPokedexList";
import { connect } from "react-redux"

function Pokedexes(props) {
  const [users, setUsers] = useState([]);
  useMemo(() => {
    GetData("user").then((response) => setUsers(response));
    console.log(props.state)
  },[props,setUsers]);

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

const mapState = (state) => {
  return {state: state}
}

export default connect(mapState)(Pokedexes);
