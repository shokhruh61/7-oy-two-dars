import axios from "axios";

export const backend = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
