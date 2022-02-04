import React, { useState } from "react";
import NyAnimator from "../components/NyAnimator";
import MainSearchBar from "../components/MainSearchBar";
import AptView from "../components/AptView";
import Grid from "@mui/material/Grid";

const Search = () => {
  const [location, setLocation] = useState("");
  return (
    <Grid container justifyContent="center">
      <MainSearchBar onLocationParsed={setLocation} />
      <AptView location={location} />
      <NyAnimator />
    </Grid>
  );
};

export default Search;
