import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Addpokemon from "../components/Addpokemon";
import { connect } from "react-redux";
import { loadPokedexList } from '../Reducer/PokedexAction'
import { addUserPoke } from '../Reducer/UserAction'
import ModelIpad from '../components/ModelIpad'
import { SearchForm } from "../components/ModelPadStyle";

function Pokemons(props) {
  const { pokedexId } = useParams();
  const [search, setSearch] = useState({ value: "" });
  const [filterSearch, setFilterSearch] = useState([]);

  if (props.message === undefined) {
    loadPokedexList(props);
  }

  const handleOnSearchChange = (event) => {
    setSearch({ value: event.target.value });
    handleOnSearchFilter();
  };

  const handleOnSearchFilter = (event) => {
    const filter = search.value;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = props.data.filter((item) => {
      return Object.keys(item).some((key) =>
        item.cards.details.name.toLowerCase().includes(lowercasedFilter)
      );
    });
    setFilterSearch(filteredData);
  };

  return (
    <ModelIpad>
      <h2> Pokedex Add Pokemon #{pokedexId}</h2>
      <SearchForm onChange={handleOnSearchChange} />
      {!search.value && filterSearch.length >= 0
        ? props.data?.map((item, index) => {
            return (
              <Addpokemon
                key={index}
                image={item.cards.details.imageUrl}
                name={item.cards.details.name}
                type={item.cards.details.type}
                atk={() => item.cards.details.attacks[0].damage}
                hp={item.cards.details.hp}
                res={0}
                button={() => addUserPoke(props, item.cards.id)}
              ></Addpokemon>
            );
          })
        : filterSearch
            ?.filter((item) => item)
            .map((item, index) => {
              return (
                <Addpokemon
                  key={index}
                  image={item.cards.details.imageUrl}
                  name={item.cards.details.name}
                  type={item.cards.details.type}
                  atk={() => item.cards.details.attacks[0].damage}
                  hp={item.cards.details.hp}
                  res={0}
                  button={() => addUserPoke(props, item.cards.id)}
                ></Addpokemon>
              );
            })}
    </ModelIpad>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state.UserListReducer.value,
    data: state.PokedexReducer.pokeList,
    message: state.PokedexReducer.message,
  };
};

export default connect(mapStateToProps)(Pokemons);
