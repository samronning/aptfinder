import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import citiesAPI from "../services/citiesAPI";
import throttle from "lodash/throttle";
import { useTransition, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

const handleChangeSearch = (newValue, setSearch) => {
  setSearch(newValue ?? "");
};

const handleSelect = (newValue, onSelect, navigate, setSelected) => {
  const lower = newValue.toLowerCase();
  const removedCommas = lower.replaceAll(",", "");
  const replacedSpaces = removedCommas.replaceAll(" ", "-");
  onSelect();
  setSelected(true);
  setTimeout(() => navigate(`/list/${replacedSpaces}`), 1000);
};

const fetch = throttle((search, callback) => {
  return citiesAPI.top_5_cities(search).then((res) => callback(res));
}, 300);

const AnimatedAutocomplete = animated(Autocomplete);

const MainSearchBar = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const transitions = useTransition(selected, {
    from: { top: -100, opacity: 0 },
    enter: { top: 100, opacity: 1 },
    leave: { top: -100, opacity: 0 },
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(search, setResults);
  }, [search]);

  return transitions(
    (styles, selected) =>
      !selected && (
        <AnimatedAutocomplete
          options={results?.map(({ city, state_id }) => `${city}, ${state_id}`)}
          inputValue={search}
          style={{
            width: 300,
            position: "fixed",
            left: "50%",
            marginLeft: -150,
            ...styles,
          }}
          open={open}
          disableClearable
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={(e, newValue, reason) => {
            handleSelect(newValue, onSelect, navigate, setSelected);
          }}
          onInputChange={(e, newValue) =>
            handleChangeSearch(newValue, setSearch)
          }
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
      )
  );
};

export default MainSearchBar;
