import express, { Request } from "express";

const mockPokemon = require("../seeds/pokemon.json");
const mongoose = require("mongoose");
const PokemmonModel = require("../models/pokemon");

mongoose.connect("mongodb://localhost:27017/node-api-101", {
  useNewUrlParser: true,
});

const index = async (req: express.Request, res: express.Response) => {
  const data = await PokemmonModel.find({});
  res.status(200).send(data);
};

const getById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const data = await PokemmonModel.findById(id);
  res.status(200).json(data);
};

const store = async (req: express.Request, res: express.Response) => {
  const data = new PokemmonModel(req.body);
  await data.save();
  res.status(200).json(data);
};

const updateById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const data = await PokemmonModel.findByIdAndUpdate(id, {
    $set: req.body,
  });
  res.status(200).json(data);
};

const deleteById = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  await PokemmonModel.findByIdAndDelete(id);
  res.status(204).end();
};

const storePokemonData = async (
  req: express.Request,
  res: express.Response
) => {
  for (let i = 0; i < mockPokemon.cards.length; i++) {
    const data = new PokemmonModel({
      cards: {
        id: mockPokemon.cards[i].id,
        details: mockPokemon.cards[i],
      },
    });
    await data.save();
  }
  res.status(200).send("Done");
};

module.exports = {
  index,
  getById,
  store,
  updateById,
  deleteById,
  storePokemonData,
};
