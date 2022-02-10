import { pyClient } from "./pyServer";

const aptsAPI = {
  scrape_list: (location, signal) =>
    pyClient
      .get("/apartments/list", { params: { location, page: 1 }, signal })
      .then((res) => res.data),
};
export default aptsAPI;
