import { useState } from "react";
import Stack from "@mui/material/Stack";
import Appbar from "@mui/material/AppBar";
import Paginator from "../components/Paginator";
import Sorter from "../components/Sorter";
import Filterer from "../components/Filterer";
import AptView from "../components/AptView";
import { useParams } from "react-router-dom";
import aptsAPI from "../services/aptsAPI";
import Loader from "../components/Loader";

const ListView = () => {
  const params = useParams();
  const [apts, setApts] = useState([]);
  const resourceGetter = () => aptsAPI.scrape_list(params.location);
  return (
    <>
      <Loader
        nullVal={[]}
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
