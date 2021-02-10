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

  if (
    user !== undefined &&
    request.password !== undefined &&
    request.password !== null
  ) {
    switch (bcrypt.compareSync(request.password, user.password)) {
      case true:
        token = createToken(user);
        return { status: "pass", token: token };
      case false:
        return { status: "error", token: undefined };
    }
  } else {
    return { status: "error", token: undefined };
  }
};
