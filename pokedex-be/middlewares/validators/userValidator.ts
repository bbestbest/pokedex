const { check } = require("express-validator");

exports.validateUser = [
  check("username").not().isEmpty(),
  check("password").not().isEmpty(),
];
