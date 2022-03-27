import { pyClient } from "./pyServer";

const aptsAPI = {
  scrape_list: (location, page, signal) =>
    pyClient
      .get("/apartments/list", { params: { location, page }, signal })
      .then((res) => res.data),
};
export default aptsAPI;
