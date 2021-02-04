import e from "express";
import express, { response } from "express";

const mongoose = require("mongoose");
const UserModel = require("../models/user");
const PokemonModel = require("../models/pokemon");

mongoose.connect("mongodb://localhost:27017/node-api-101", {
  useNewUrlParser: true,
});

const index = async (req: express.Request, res: express.Response) => {
  const data = await UserModel.find({}).then((response: any) =>
    JSON.parse(JSON.stringify(response))
  );
  const pokemon = await PokemonModel.find({}).then((response: any) =>
    JSON.parse(JSON.stringify(response))
  );

  let tempData;
  const setData = data.map(
    (item: any, index: any) =>
      (tempData = {
        id: data[index]._id,
        username: data[index].username,
        password: data[index].password,
        pokemons: pokemon.filter((pokemonId: any) => {
          for (let i = 0; i < item.pokemon_id.length; i++) {
            if (pokemonId.cards.id === item.pokemon_id[i]) {
              return pokemonId.cards.details;
            }
          }
        }),
      })
  );
  res.status(200).send(setData);
};

const getById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const data = await UserModel.findById(id).then((response: any) =>
      JSON.parse(JSON.stringify(response))
    );
    const pokemon = await PokemonModel.find({}).then((response: any) =>
      JSON.parse(JSON.stringify(response))
    );

    const setData = {
      id: data._id,
      username: data.username,
      password: data.password,
      pokemons: pokemon.filter((pokemonId: any) => {
        for (let i = 0; i < data.pokemon_id.length; i++) {
          if (pokemonId.cards.id === data.pokemon_id[i]) {
            return pokemonId.cards.details;
          }
        }
      }),
    };
    res.status(200).send(setData);
  } catch (e) {
    res.status(404).send(`${id} not found`);
  }
};

const store = async (req: express.Request, res: express.Response) => {
  const { username, password, pokemon_id } = req.body;
  const data = new UserModel({
    username: username,
    password: password,
    pokemon_id: pokemon_id,
  });
  await data.save();
  res.status(200).json(data);
};

const updateById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { username, password, pokemon_id } = req.body;
  const data = await UserModel.findByIdAndUpdate(id, {
    $set: {
      username: username,
      password: password,
      pokemon_id: pokemon_id,
    },
  });
  res.status(200).json(data);
};
const deleteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  await UserModel.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = { index, getById, store, updateById, deleteById };
