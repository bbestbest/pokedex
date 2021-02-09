import axios from "axios";

const API_ENDPOINT = "http://localhost:8000";
const JSON_HEADER = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": true,
};

export async function GetData(path) {
  return await axios({
    method: "GET",
    headers: JSON_HEADER,
    url: `${API_ENDPOINT}/${path}`,
  }).then((response) => response.data);
}

export async function GetLogin(path, request) {
  return await axios({
    method: "POST",
    url: `${API_ENDPOINT}/${path}`,
    headers: JSON_HEADER,
    data: JSON.stringify({
      username: request.username,
      password: request.password,
    }),
  }).then((response) => response.data);
}
