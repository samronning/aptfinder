import { useState, useEffect } from "react";
import aptsAPI from "../services/aptsAPI";

const AptView = (props) => {
  const { location } = props;
  const [apts, setApts] = useState([]);
  console.log(apts);
  useEffect(() => {
    if (location) {
      aptsAPI.scrape_list(location).then((res) => setApts(res));
    }
  }, [location]);
  return null;
};

export default AptView;
