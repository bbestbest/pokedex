import express, { response } from "express";

const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const PokemonModel = require("../models/pokemon");
const SetInformation = require("../utils/SetInformation");
const LoginFunc = require("../utils/LoginFunc");

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
  return res.status(200).send(information);
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
    return res.status(200).send(information);
  } catch (e) {
    return res.status(404).send(`${id} not found`);
  }
};

const store = async (req: express.Request, res: express.Response) => {
  const { username, password } = req.body;

  const salt = bcrypt.genSaltSync(12);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const data = new UserModel({
    username: username,
    password: hashedPassword,
  });
  await data.save();
  return res.status(200).json(data);
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
  return res.status(200).json(data);
};
const deleteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;

  await UserModel.findByIdAndDelete(id);
  return res.status(204).end();
};
const login = async (req: express.Request, res: express.Response) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (username !== undefined && password !== undefined) {
    const data = await LoginFunc({ UserModel }, { username, password }, bcrypt);
    switch (data) {
      case data:
        return res.status(200).send({ token: data.token });
      case null:
        return res.status(403).send("Username or Password is incorrect");
    }
  }
  return res.status(403).send("Username or Password is incorrect");
};

module.exports = { index, getById, store, updateById, deleteById, login };
