const createToken = require("./CreateToken");

module.exports = async function LoginFunc(
  model: any,
  request: any,
  bcrypt: any
) {
  let token: String;
  const user = await model.UserModel.findOne({
    username: request.username,
  }).then((response: any) => response);
  switch (bcrypt.compareSync(request.password, user.password)) {
    case true:
      token = createToken(user);
      return {
        status: "pass",
        _id: user._id,
        username: user.username,
        token: token,
      };
    case false:
      return { status: "error", token: undefined };
  }
};
