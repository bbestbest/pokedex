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
  console.log(user);

  if (user !== undefined) {
    const salt = bcrypt.genSaltSync(12);
    switch (bcrypt.compareSync(request.password, user.password)) {
      case true:
        token = createToken(user);
        return { token: token };
      case false:
        return null;
    }
  } else {
    return null;
  }
};
