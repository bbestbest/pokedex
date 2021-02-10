import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPokedexList } from '../Reducer/PokedexAction'

function PokedexesList(props) {
  const { id } = useParams();
  if (props.messagePoke === undefined ) {
    loadPokedexList(props)
  }
  console.log(props.dataUser)
  console.log(props.dataPokemon)
  return (
    <>
      <div>PokedexesList #{id}</div>
      <Link to={`/pokemons/${id}`}>AddPokemon</Link>
      {props.dataUser?.pokemons?.map((items,index) => props.dataPokemon.filter((item) => item.cards.id === items) )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { dataUser: state.UserListReducer.value, dataPokemon: state.PokedexReducer.pokeList, messagePoke: state.PokedexReducer.message };
};

export default connect(mapStateToProps)(PokedexesList);
