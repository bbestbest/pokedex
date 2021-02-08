import axios from "axios";

const API_ENDPOINT = "http://localhost:8000";
const JSON_HEADER = { "Content-Type": "application/json" };

export async function GetData(route) {
  return await axios({
    method: "GET",
    headers: { "Access-Control-Allow-Origin": true },
    url: `${API_ENDPOINT}/${route}`,
  }).then((response) => response.data);
}
