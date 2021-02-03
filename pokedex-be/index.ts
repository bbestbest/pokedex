import express from "express";
import bodyParser from "body-parser";
const pokedex = require("./seeds/pokemon.json");

const app = express();
var verbose = process.env.NODE_ENV != "test";
const PORT = 8000;

app.map = function (a: any, route: any) {
  route = route || "";
  for (var key in a) {
    switch (typeof a[key]) {
      // { '/path': { ... }}
      case "object":
        app.map(a[key], route + key);
        break;
    }
  }
};

//Pokemon
const pokemons = {
  index: app.get("/pokemon", (req, res) => res.json(pokedex)),

  get: app.get("/pokemon/:id", (req, res) => {
    res.json(
      pokedex.cards.find((pokemonId: any) => pokemonId.id === req.params.id)
    );
  }),

  store: app.post("/pokemon", (req, res) => {
    pokedex.cards.push(req.body);
    res.status(200).json(req.body);
  }),

  update: app.put("/pokemon/:id", (req, res) => {
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
  }),

  delete: app.delete("/pokemon/:id", (req, res) => {
    const deletedIndex: Number = pokedex.cards.findIndex(
      (pokemonId: any) => pokemonId.id === req.params.id
    );
    if (deletedIndex >= 0) {
      pokedex.cards.splice(deletedIndex, 1);
      res.status(200).send("Deleted");
    } else {
      res.status(200).send("Not found");
    }
  }),
};

app.map({
  "/pokemons": {
    get: pokemons.index,
    store: pokemons.store,
    "/:id": {
      get: pokemons.get,
      update: pokemons.update,
      delete: pokemons.delete,
    },
  },
});

app.listen(PORT, () => {});
