import { useState, useCallback } from "react";
import Stack from "@mui/material/Stack";
import Appbar from "@mui/material/AppBar";
import Paginator from "../components/Paginator";
import Sorter from "../components/Sorter";
import Filterer from "../components/Filterer";
import AptView from "../components/AptView";
import { useParams } from "react-router-dom";
import aptsAPI from "../services/aptsAPI";
import Loader from "../components/Loader";

const nullVal = [];

const ListView = () => {
  const params = useParams();
  const [apts, setApts] = useState([]);
  const resourceGetter = useCallback(
    () => aptsAPI.scrape_list(params.location),
    [params.location]
  );
  return (
    <>
      <Loader
        nullValGetter={nullVal}
        resourceGetter={resourceGetter}
        setResource={setApts}
        active={apts.length === 0}
      />
      <Stack alignItems="center">
        <Appbar>
          <Paginator />
          <Sorter />
          <Filterer />
        </Appbar>
        <AptView apts={apts} />
      </Stack>
    </>
  );
};

export default ListView;
