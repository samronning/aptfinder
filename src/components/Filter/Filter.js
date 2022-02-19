import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import BedIcon from "@mui/icons-material/Bed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FilterMenu from "./FilterMenu";
import T from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const buttonDefs = [
  { label: "Beds", icon: <BedIcon />, id: "beds" },
  { label: "Price", icon: <AttachMoneyIcon />, id: "price" },
];

const Filter = () => {
  const [buttonProps, setButtonProps] = useState({});
  return (
    <>
      <Grid container justifyContent="center">
        {buttonDefs.map(({ label, icon, id }) => (
          <Grid container item key={id} alignItems="center" xs="auto">
            <T variant="subtitle2" marginLeft={2}>
              {label}
            </T>
            <IconButton
              children={icon}
              sx={{ ml: 0.5 }}
              onClick={(e) =>
                setButtonProps((prev) => ({
                  ...prev,
                  [id]: { anchorEl: e.currentTarget },
                }))
              }
            />
          </Grid>
        ))}
      </Grid>
      {buttonDefs.map(({ id, label }) => (
        <FilterMenu
          label={label}
          id={id}
          anchorEl={buttonProps?.[id]?.anchorEl}
          onClose={() =>
            setButtonProps((prev) => ({ ...prev, [id]: { anchorEl: null } }))
          }
        />
      ))}
    </>
  );
};

export default Filter;
