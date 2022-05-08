import { useState } from "react";
import useApartmentQuery from "../hooks/useApartmentQuery";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Filter from "../components/Filter/Filter";
import AptView from "../components/AptView";
import Loader from "../components/Loader";

const ListView = () => {
  const params = useParams();
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();
  const { apartments, loading, error } = useApartmentQuery(
    params.location,
    sort,
    filter
  );
  return (
    <>
      <Loader active={loading && apartments.length === 0} />
      <Stack alignItems="center">
        <Appbar position="fixed">
          <Toolbar sx={{ justifyContent: "center" }}>
            <Filter setFilter={setFilter} setSort={setSort} />
          </Toolbar>
        </Appbar>
        <AptView apts={apartments} sx={{ mt: 10 }} />
      </Stack>
    </>
  );
};

export default ListView;
