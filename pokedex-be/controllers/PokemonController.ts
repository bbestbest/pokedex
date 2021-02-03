import express from "express";

const pokedex = require("../seeds/pokemon.json");

const index = (req: express.Request, res: express.Response) => {
  res.status(200).json(pokedex);
};
const getById = (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .json(
      pokedex.cards.find((pokemonId: any) => pokemonId.id === req.params.id)
    );
};
const store = (req: express.Request, res: express.Response) => {
  pokedex.cards.push(req.body);
  res.status(200).json(req.body);
};
const updateById = (req: express.Request, res: express.Response) => {
  const updateIndex = pokedex.cards.findIndex(
    (pokemonId: any) => pokemonId.id === req.params.id
  );
  switch (updateIndex) {
    case 0:
      res.json(Object.assign(pokedex.cards[updateIndex], req.body));
    case undefined:
      res.send(`${req.params.id} not found`);
    default:
      res.send(`${req.params.id} not found`);
  }
};
const deleteById = (req: express.Request, res: express.Response) => {
  const deletedIndex: Number = pokedex.cards.findIndex(
    (pokemonId: any) => pokemonId.id === req.params.id
  );
  if (deletedIndex >= 0) {
    pokedex.cards.splice(deletedIndex, 1);
    res.status(200).send("Deleted");
  } else {
    res.status(200).send("Not found");
  }
};

module.exports = { index, getById, store, updateById, deleteById };
