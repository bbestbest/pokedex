const { sign } = require("jsonwebtoken");

module.exports = function createToken(user: any) {
  const payload = {
    username: user.username,
  };

  const secret = "SECRETE_KEY";

  const signedToken = sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
  return signedToken;
};
