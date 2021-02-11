import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Addpokemon from "../components/Addpokemon";
import { checkUserList } from "../Reducer/UserAction";
import ModelIpad from '../components/ModelIpad'

function PokedexesList(props) {
  React.useEffect(() => {
    checkUserList(props);
  }, []);
  const { id } = useParams();

  return (
    <ModelIpad>
      <div>PokedexesList #{id}</div>
      {props.dataUserList !== undefined &&
      props.dataUserList[id - 1]?.username === props.dataUser ? (
        <Link to={`/pokemons/${id}`}>AddPokemon</Link>
      ) : null}
      {props.dataUserList !== undefined
        ? props.dataUserList[id - 1]?.pokemons.map((item, index) => {
            return (
              <Addpokemon
                key={index}
                image={item.cards.details.imageUrl}
                name={item.cards.details.name}
                type={item.cards.details.type}
                atk={() => item.cards.details.attacks[0].damage}
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
