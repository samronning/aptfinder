import { useState } from "react";
import Popover from "@mui/material/Popover";
import Grid from "@mui/material/Grid";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import IconButton from "@mui/material/IconButton";

const FilterMenu = ({
  id,
  anchorEl,
  onClose,
  InputComponent = () => null,
  onSort,
  onFilter,
}) => {
  const [filter, setFilter] = useState({});
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
          <InputComponent
            onUpdate={(e) =>
              setFilter({ filterBy: id, bound: "min", value: e.target.value })
            }
            label="Min"
          />
        </Grid>
        <Grid item>
          <InputComponent
            onUpdate={(e) =>
              setFilter({ filterBy: id, bound: "max", value: e.target.value })
            }
            label="Max"
          />
        </Grid>
        <Grid item>
          <IconButton
            children={
              <FilterAltIcon
                onClick={() =>
                  onFilter(filter.filterBy, filter.bound, filter.value)
                }
              />
            }
          />
        </Grid>
        <Grid item>
          <IconButton
            children={<ArrowUpward />}
            onClick={() => onSort(id, false)}
          />
          <IconButton
            children={<ArrowDownward onClick={() => onSort(id, true)} />}
          />
        </Grid>
      </Grid>
    </Popover>
  );
};

export default FilterMenu;
