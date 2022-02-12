import React, { useState, useEffect, useMemo } from "react";
import NyAnimator from "../components/NyAnimator";
import MainSearchBar from "../components/MainSearchBar";
import AptView from "../components/AptView";
import aptsAPI from "../services/aptsAPI";
import Stack from "@mui/material/Stack";

const Search = () => {
  const [apts, setApts] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const searchController = useMemo(
    () => location && new AbortController(),
    [location]
  );

  useEffect(
    () => () => searchController && searchController.abort(),
    [searchController]
  );

  useEffect(() => {
    if (location) {
      setLoading(true);
      aptsAPI
        .scrape_list(location, searchController.signal)
        .then((res) => {
          setTimeout(() => {
            if (!searchController.signal.aborted) {
              setApts(res);
              setLoaded(true);
            } else {
              setApts([]);
              setLoaded(false);
            }
          }, 0);
        })
        .catch(() => {
          setLoaded(false);
          setApts([]);
        })
        .finally(() => setLoading(false));
    }
  }, [location, setLoading, setLoaded, searchController.signal]);

  return (
    <>
      <Stack alignItems="center">
        <MainSearchBar
          onLocationParsed={setLocation}
          abortLoad={() => searchController.abort()}
          onClear={() => setApts([])}
          loaded={loaded}
          setLoaded={setLoaded}
        />
        <AptView apts={apts} />
      </Stack>
      <NyAnimator followMouse={!location} loading={loading} loaded={loaded} />
    </>
  );
};

export default Search;
