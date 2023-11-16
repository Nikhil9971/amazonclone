import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-8feee/us-central1/api", //cloud function api url
});

export default instance;
