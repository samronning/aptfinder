import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";

const FilterMenu = ({
  anchorEl,
  onClose,
  InputComponent = () => null,
  onSortAsc,
  onSortDesc,
  onFilterMin,
  onFilterMax,
}) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <Grid container sx={{ m: 1 }} direction="column">
        <Grid item>
          <InputComponent onFilter={onFilterMin} />
        </Grid>
        <Grid item>
          <InputComponent onFilter={onFilterMax} />
        </Grid>
        <Grid item>
          <IconButton children={<ArrowUpward />} />
          <IconButton children={<ArrowDownward />} />
        </Grid>
      </Grid>
    </Menu>
  );
};

export default FilterMenu;
