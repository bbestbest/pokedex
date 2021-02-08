import axios from "axios";

const API_ENDPOINT = "http://localhost:8000";
// const JSON_HEADER = { "Content-Type": "application/json" };

export async function GetData(path) {
  return await axios({
    method: "GET",
    headers: { "Access-Control-Allow-Origin": true },
    url: `${API_ENDPOINT}/${path}`,
  }).then((response) => response.data);
}

export async function GetLogin(path, request) {
  return await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: request.username,
      password: request.password,
    }),
    url: "http://127.0.0.1:8000/login",
  }).then((response) => response.data);
  // const configs = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     username: username,
  //     password: password,
  //   }),
  // };
  // fetch("http://127.0.0.1:8000/login", configs).then((response) =>
  //   response.json()
  // );
}
