import TextField from "@mui/material/TextField";

const MainSearchBar = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Location"
      variant="outlined"
      sx={{ mt: 15, mb: 5 }}
      color="primary"
    />
  );
};

export default MainSearchBar;
