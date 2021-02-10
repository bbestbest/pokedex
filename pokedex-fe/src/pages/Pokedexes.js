import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
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
  return (
    <>
      <UserList>
        <h1>Pokedexes</h1>
        {props.state?.map((propItem, propIndex) => (
          <RedBackground key={propIndex}>
            <Link to={`/pokedexesList/${propIndex + 1}`}>{propItem.username}</Link>
          </RedBackground>
        ))}
      </UserList>
    </>
  );
}

const mapState = (state) => {
  return { state: state.UserListReducer.value };
};

export default connect(mapState)(Pokedexes);
