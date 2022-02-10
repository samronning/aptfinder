import React, { useState, useEffect, useMemo } from "react";
import NyAnimator from "../components/NyAnimator";
import MainSearchBar from "../components/MainSearchBar";
import AptView from "../components/AptView";
import Grid from "@mui/material/Grid";

const Search = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const searchController = useMemo(() => location && new AbortController(), [
    location,
  ]);

  useEffect(() => () => searchController && searchController.abort(), [
    searchController,
  ]);

  return (
    <Grid container justifyContent="center">
      <MainSearchBar
        onLocationParsed={setLocation}
        abortLoad={() => searchController.abort()}
        loaded={loaded}
        setLoaded={setLoaded}
      />
      <AptView
        location={location}
        setLoading={setLoading}
        setLoaded={setLoaded}
        signal={searchController.signal}
      />
      <NyAnimator followMouse={!location} loading={loading} loaded={loaded} />
    </Grid>
  );
};

export default Search;
