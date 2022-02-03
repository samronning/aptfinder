import NyAnimator from "../components/NyAnimator";
import MainSearchBar from "../components/MainSearchBar";
import Grid from "@mui/material/Grid";

const Search = () => {
  return (
    <Grid container justifyContent="center">
      <MainSearchBar />
      <NyAnimator />
    </Grid>
  );
};

export default Search;
