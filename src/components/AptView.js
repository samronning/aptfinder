import { useState, useEffect } from "react";
import aptsAPI from "../services/aptsAPI";

const AptView = (props) => {
  const { location, setLoading, setLoaded, signal } = props;
  const [apts, setApts] = useState([]);
  console.log(apts);
  useEffect(() => {
    if (location) {
      setLoading(true);
      aptsAPI
        .scrape_list(location, signal)
        .then((res) => {
          setTimeout(() => {
            if (!signal.aborted) {
              setApts(res);
              setLoaded(true);
            } else {
              setApts([]);
              setLoaded(false);
            }
          }, 8000);
        })
        .catch(() => setLoaded(false))
        .finally(() => setLoading(false));
    }
  }, [location, setLoading, setLoaded, signal]);
  return null;
};

export default AptView;
