import { Schema } from "inspector";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user: any = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  pokemon_id: {
    type: Array,
  },
});

const UserModel = mongoose.model("users", user);

module.exports = UserModel;
