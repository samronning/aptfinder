import { useState, useCallback } from "react";
import Stack from "@mui/material/Stack";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Filter from "../components/Filter/Filter";
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
      {apts.length ? (
        <Stack alignItems="center">
          <Appbar position="fixed">
            <Toolbar sx={{ justifyContent: "center" }}>
              <Filter />
            </Toolbar>
          </Appbar>
          <AptView apts={apts} sx={{ mt: 10 }} />
        </Stack>
      ) : null}
    </>
  );
};

export default ListView;
