import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Addpokemon from "../components/Addpokemon";
import { checkUserList } from "../Reducer/UserAction";
import ModelIpad from '../components/ModelIpad'

function PokedexesList(props) {
  React.useEffect(() => {
    checkUserList(props);
  }, []);
  const { id } = useParams();
  const history = useHistory();
  return (
    <ModelIpad>
      <h3 onClick={() => history.push("/pokedexes")}>Back</h3>
      <h2>PokedexesList #{id}</h2>
      {props.dataUserList !== undefined &&
      props.dataUserList[id - 1]?.username === props.dataUser ? (
        <Link to={`/pokemons/${id}`}><h2>AddPokemon</h2></Link>
      ) : null}
      {props.dataUserList !== undefined
        ? props.dataUserList[id - 1]?.pokemons.map((item, index) => {
            return (
              <Addpokemon
                key={index}
                image={item.cards.details.imageUrl}
                name={item.cards.details.name}
                type={item.cards.details.type}
                atk={item.cards.details.attacks !== undefined ? item.cards.details.attacks[0].damage : 0}
                hp={item.cards.details.hp}
                res={0}
              ></Addpokemon>
            );
          })
        : null}
    </ModelIpad>
  );
}

const mapStateToProps = (state) => {
  return {
    dataUserList: state.UserListReducer.value,
    dataUser: state.UserReducer.username,
  };
};

export default connect(mapStateToProps)(PokedexesList);
