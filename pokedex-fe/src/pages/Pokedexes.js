import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { checkUserList } from "../Reducer/UserAction";
import UserList from "../components/UserPokedexList";
import { connect } from "react-redux";
import { TextBackground } from "../components/ModelPadStyle";

function Pokedexes(props) {
  console.log(props.state)
  return (
    <>
      <UserList>
        <h1>Pokedexes</h1>
        {props.state?.map((propItem, propIndex) => (
          <TextBackground key={propIndex}>
            <Link to={`/pokedexesList/${propIndex + 1}`}>
              {propItem.username}
            </Link>
          </TextBackground>
        ))}
      </UserList>
    </>
  );
}

const mapState = (state) => {
  return { state: state.UserListReducer.value };
};

export default connect(mapState)(Pokedexes);
