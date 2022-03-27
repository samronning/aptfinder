import { useState, useCallback, useRef } from "react";
import useApartmentQuery from "../hooks/useApartmentQuery";
import Stack from "@mui/material/Stack";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Filter from "../components/Filter/Filter";
import AptView from "../components/AptView";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import QuietLoader from "../components/QuietLoader";

const ListView = () => {
  const params = useParams();
  const observer = useRef();
  const [page, setPage] = useState(1);
  const { loading, error, apartments, hasMore } = useApartmentQuery(
    params.location,
    page
  );
  const lastApartmentElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        const lastApt = entries[0];
        if (lastApt.isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <>
      <QuietLoader active={loading && apartments.length > 0} />
      <Loader active={loading && apartments.length === 0} />
      {apartments.length ? (
        <Stack alignItems="center">
          <Appbar position="fixed">
            <Toolbar sx={{ justifyContent: "center" }}>
              <Filter />
            </Toolbar>
          </Appbar>
          <AptView
            apts={apartments}
            sx={{ mt: 10 }}
            lastApartmentElementRef={lastApartmentElementRef}
          />
        </Stack>
      ) : null}
    </>
  );
};

export default ListView;
