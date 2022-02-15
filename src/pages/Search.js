import React, { useState } from "react";
import NyAnimator from "../components/NyAnimator";
import MainSearchBar from "../components/MainSearchBar";

const Search = () => {
  const [leave, setLeave] = useState(false);
  return (
    <>
      <MainSearchBar onSelect={() => setLeave(true)} />
      <NyAnimator leave={leave} followMouse={true} />
    </>
  );
};

export default Search;
