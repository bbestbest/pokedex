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
    url: `${API_ENDPOINT}/${path}`,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({
      username: request.username,
      password: request.password,
    }),
  }).then((response) => response.data);
}
