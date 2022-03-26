import Popover from "@mui/material/Popover";
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
    <Popover
      anchorEl={anchorEl}
      variant="menu"
      open={Boolean(anchorEl)}
      onClose={(e, reason) => {
        if (reason === "tabKeyDown") return;
        onClose();
      }}
    >
      <Grid container sx={{ m: 1 }} direction="column">
        <Grid item>
          <InputComponent onUpdate={onFilterMin} label="Min" />
        </Grid>
        <Grid item>
          <InputComponent onUpdate={onFilterMax} label="Max" />
        </Grid>
        <Grid item>
          <IconButton children={<ArrowUpward />} />
          <IconButton children={<ArrowDownward />} />
        </Grid>
      </Grid>
    </Popover>
  );
};

export default FilterMenu;
