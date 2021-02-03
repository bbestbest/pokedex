import express from "express";

const app = express();
const PORT = 8000;
const pokemon = require("./routes/pokemon");

// const router = express.Router();
// const pokemonController = require("./controllers/pokemon-controller");

// app.map = function (a: any, route: any) {
//   route = route || "";
//   for (var key in a) {
//     switch (typeof a[key]) {
//       // { '/path': { ... }}
//       case "object":
//         app.map(a[key], route + key);
//         break;
//     }
//   }
// };

// app.map({
//   "/pokemon": {
//     index: index,
//   },
// });
app.use("", pokemon);

app.listen(PORT, () => {});
