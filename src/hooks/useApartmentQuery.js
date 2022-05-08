import { useState, useEffect } from "react";
import aptsAPI from "../services/aptsAPI";

const useApartmentQuery = (location, sort, filter) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allApartments, setAllApartments] = useState([]);
  const [apartments, setApartments] = useState([]);
  const controller = new AbortController();

  useEffect(() => {
    if (!sort?.sortBy) return;
    const { sortBy, desc } = sort;
    const compareFn = (aptA, aptB) =>
      desc
        ? aptB[`${sortBy}_max`] - aptA[`${sortBy}_max`]
        : aptA[`${sortBy}_min`] - aptB[`${sortBy}_min`];
    setApartments(allApartments.sort(compareFn));
    setAllApartments(allApartments.sort(compareFn));
  }, [sort]);

  useEffect(() => {
    if (!filter?.filterBy) return;
    const { filterBy, min, max } = filter;
    setApartments(
      allApartments.filter((apt) => {
        if (min !== undefined && apt[`${filterBy}_min`] < min) {
          return false;
        }
        if (max !== undefined && apt[`${filterBy}_max`] > max) {
          return false;
        }
        return true;
      })
    );
  }, [filter]);

  useEffect(() => {
    if (allApartments.length) return;
    setLoading(true);
    setError(false);
    aptsAPI
      .scrape_list(location, null, controller.signal)
      .then((res) => {
        setApartments(res);
        setAllApartments(res);
        setLoading(false);
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        setError(true);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { loading, error, apartments };
};

export default useApartmentQuery;
