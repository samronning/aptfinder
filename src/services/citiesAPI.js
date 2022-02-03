import axios from "axios";
import { pyClient } from "./pyServer";

axios.create();

const citiesAPI = {
  top_5_cities: (search) =>
    pyClient.get("/cities", { params: { search } }).then((res) => res.data),
};
export default citiesAPI;
