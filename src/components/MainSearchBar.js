import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import citiesAPI from "../services/citiesAPI";
import throttle from "lodash/throttle";
import { useSpring, animated } from "react-spring";

const handleChangeSearch = (newValue, setSearch) => {
  setSearch(newValue ?? "");
};

const handleSelect = (newValue, onLocationParsed, setSelected) => {
  if (!newValue) {
    setSelected(false);
    onLocationParsed("");
    return;
  }
  setSelected(true);
  const lower = newValue.toLowerCase();
  const removedCommas = lower.replaceAll(",", "");
  const replacedSpaces = removedCommas.replaceAll(" ", "-");
  onLocationParsed(replacedSpaces);
};

const fetch = throttle((search, callback) => {
  citiesAPI.top_5_cities(search).then((res) => callback(res));
}, 300);

const AnimatedAutocomplete = animated(Autocomplete);

const MainSearchBar = (props) => {
  const { onLocationParsed } = props;
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const spring = useSpring({ top: !selected ? 100 : 20 });

  useEffect(() => {
    fetch(search, setResults);
  }, [search]);

  return (
    <AnimatedAutocomplete
      options={results?.map(({ city, state_id }) => `${city}, ${state_id}`)}
      inputValue={search}
      style={spring}
      open={open}
      sx={{ position: "fixed" }}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onChange={(e, newValue, reason) => {
        if (reason === "clear" || !newValue) setOpen(false);
        handleChangeSearch(newValue, setSearch);
        handleSelect(newValue, onLocationParsed, setSelected);
      }}
      onInputChange={(e, newValue) => handleChangeSearch(newValue, setSearch)}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Location"
          sx={{ minWidth: 300 }}
          color="primary"
          variant="outlined"
        />
      )}
    />
  );
};

export default MainSearchBar;
