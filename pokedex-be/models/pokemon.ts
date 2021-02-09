import { Schema } from "inspector";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema: any = new Schema({
  cards: {
    type: Object,
    required: true,
    id: {
      type: String,
      required: true,
      unique: true,
      details: {
        type: Object,
        required: true,
      },
    },
  },
});

const PokemonModel = mongoose.model("pokemons", pokemonSchema);

module.exports = PokemonModel;
