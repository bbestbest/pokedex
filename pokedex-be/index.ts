import express, { response } from "express";

const app = express();
const pokemon = require("./routes/pokemon");
const user = require("./routes/user");
const PORT = 8000;

app.use(express.json());

app.use("", pokemon);
app.use("", user);

app.listen(PORT, () => {});
