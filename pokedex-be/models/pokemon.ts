import { Schema } from "inspector";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema: any = new Schema({
  cards: {
    type: Object,
    require: true,
    id: {
      type: String,
      require: true,
      details: {
        type: Object,
        require: true,
      },
    },
  },
});

const PokemonModel = mongoose.model("pokemons", pokemonSchema);

module.exports = PokemonModel;
