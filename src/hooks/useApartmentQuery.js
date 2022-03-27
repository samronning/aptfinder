import { useState, useEffect } from "react";
import aptsAPI from "../services/aptsAPI";

const useApartmentQuery = (location, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [apartments, setApartments] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const controller = new AbortController();

  useEffect(() => {
    setApartments([]);
  }, [location]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    aptsAPI
      .scrape_list(location, page, controller.signal)
      .then((res) => {
        setApartments((apts) => [...apts, ...res]);
        setLoading(false);
        setHasMore(res.length > 0);
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        setError(true);
        setLoading(false);
      });
    return () => controller.abort();
  }, [location, page]);

  return { loading, error, apartments, hasMore };
};

export default useApartmentQuery;
