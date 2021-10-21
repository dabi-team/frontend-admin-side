import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:7000" });

api.interceptors.request.use((req) => {
  // const jsons = localStorage.setItem('');
  const json = localStorage.getItem("profile");
  if (json) {
    req!.headers!.token = JSON.parse(json).token;
  }
  return req;
});
