import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserList from "../components/UserPokedexList";
import { connect } from "react-redux";
import { TextBackground } from "../components/ModelPadStyle";

function Pokedexes(props) {
  const history = useHistory();

  useEffect(() => {
    if (props.state === undefined) {
      history.push("/login");
    }
  });

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
