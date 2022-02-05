import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import citiesAPI from "../services/citiesAPI";
import throttle from "lodash/throttle";

const handleChangeSearch = (newValue, setSearch) => {
  setSearch(newValue ?? "");
};

const handleSelect = (newValue, onLocationParsed, parallaxME) => {
  const cityShiftDist = 280000;
  const cityShiftOpts = { smooth: 1 };
  if (!newValue) {
    parallaxME.manual(0, 0, cityShiftOpts);
    setTimeout(() => parallaxME.start(), cityShiftOpts.smooth * 1000);
    return;
  }
  const lower = newValue.toLowerCase();
  const removedCommas = lower.replaceAll(",", "");
  const replacedSpaces = removedCommas.replaceAll(" ", "-");
  parallaxME.stop();
  parallaxME.manual(-cityShiftDist, 0, cityShiftOpts);
  onLocationParsed(replacedSpaces);
};

const fetch = throttle((search, callback) => {
  citiesAPI.top_5_cities(search).then((res) => callback(res));
}, 300);

const MainSearchBar = (props) => {
  const { onLocationParsed, parallaxME } = props;
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(search, setResults);
  }, [search]);

  return (
    <Autocomplete
      options={results?.map(({ city, state_id }) => `${city}, ${state_id}`)}
      inputValue={search}
      onChange={(e, newValue) => {
        handleChangeSearch(newValue, setSearch);
        handleSelect(newValue, onLocationParsed, parallaxME);
      }}
      onInputChange={(e, newValue) => handleChangeSearch(newValue, setSearch)}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Location"
          sx={{ mt: 15, mb: 5, minWidth: 300 }}
          color="primary"
          variant="outlined"
        />
      )}
    />
  );
};

export default MainSearchBar;
