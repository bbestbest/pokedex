import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { GetData } from "../services/FetchData";
import { checkUserList } from "../Reducer/UserAction";
import UserList from "../components/UserPokedexList";
import { connect } from "react-redux";
import styled from "styled-components";

const RedBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  border-radius: 5rem;
  margin: 0.5em 0;
`;

function Pokedexes(props) {
  const [users, setUsers] = useState([]);

  return (
    <>
      <UserList>
        <h1>Pokedexes</h1>
        {users.map((userItem, userIndex) => (
          <RedBackground key={userIndex}>
            <Link to={`/pokedexes/${userIndex + 1}`}>{userItem.username}</Link>
          </RedBackground>
        ))}
      </UserList>
    </>
  );
}

const mapState = (state) => {
  return { state: state };
};

export default connect(mapState)(Pokedexes);
