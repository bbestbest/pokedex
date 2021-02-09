const createToken = require("./CreateToken");

module.exports = async function LoginFunc(
  model: any,
  request: any,
  bcrypt: any
) {
  let token: String;
  const user = await model.UserModel.find({
    username: request.username,
  }).then((response: any) => response[0]);

  if (user !== undefined) {
    const salt = bcrypt.genSaltSync(12);
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
