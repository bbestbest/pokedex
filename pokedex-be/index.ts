import express from "express";
const cors = require("cors");

const app = express();
const pokemon = require("./routes/pokemon");
const user = require("./routes/user");
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.use("", pokemon);
app.use("", user);

app.listen(PORT, () => {});
