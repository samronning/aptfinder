import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import BedIcon from "@mui/icons-material/Bed";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FilterSortMenu from "./FilterSortMenu";
import PriceInput from "./PriceInput";
import BedInput from "./BedInput";
import T from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const buttonDefs = [
  { label: "Beds", icon: <BedIcon />, id: "beds", InputComponent: BedInput },
  {
    label: "Price",
    icon: <AttachMoneyIcon />,
    id: "price",
    InputComponent: PriceInput,
  },
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
      {buttonDefs.map(({ id, label, InputComponent }) => (
        <FilterSortMenu
          label={label}
          key={id}
          id={id}
          InputComponent={InputComponent}
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
