import { Schema } from "inspector";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema: any = new Schema({
  cards: {
    type: Object,
    id: {
      type: String,
      details: {
        type: Object,
      },
    },
  },
});

const PokemonModel = mongoose.model("pokemons", pokemonSchema);

module.exports = PokemonModel;
