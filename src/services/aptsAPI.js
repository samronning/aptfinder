import axios from "axios";
import { pyClient } from "./pyServer";

axios.create();

const aptsAPI = {
  scrape_list: (location) =>
    pyClient
      .get("/apartments/list", { params: { location, page: 1 } })
      .then((res) => res.data),
};
export default aptsAPI;
