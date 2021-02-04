import e from "express";
import express, { response } from "express";

const mongoose = require("mongoose");
const UserModel = require("../models/user");
const PokemonModel = require("../models/pokemon");
const SetInformation = require("../utils/SetInfomation");

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

  const information = await SetInformation({ data, pokemon }, 1);
  res.status(200).send(information);
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
    const information = await SetInformation({ data, pokemon }, 2);
    res.status(200).send(information);
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
