import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ModelIpad from "../components/ModelIpad";

function PokedexesList(props) {
  const { id } = useParams();
  return (
    <>
        <div>PokedexesList #{id}</div>
        <Link to={`/pokemons/${id}`}>AddPokemon</Link>
    </>
  );
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(PokedexesList);
