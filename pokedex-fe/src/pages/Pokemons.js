import React from "react";
import { useParams } from "react-router-dom";
import Addpokemon from "../components/Addpokemon";
import { connect } from "react-redux";
import { loadPokedexList } from '../Reducer/PokedexAction'

function Pokemons(props) {
  const { pokedexId } = useParams();
  if (props.message === undefined) {
    loadPokedexList(props)
  }
  return (
    <>
      {props.data?.map((item,index) => {
        return <Addpokemon
          key={index}
          image={item.cards.details.imageUrl}
          name={item.cards.details.name}
          type={item.cards.details.type}
          atk={() => item.cards.details.attacks[0].damage}
          hp={item.cards.details.hp}
          res={0}
        ></Addpokemon>;
      })}
    </>
  );
}
const mapStateToProps = (state) => {
  return { data: state.PokedexReducer.pokeList,
          message: state.PokedexReducer.message };
};

export default connect(mapStateToProps)(Pokemons);
