import Dollar from "@mui/icons-material/AttachMoney";
import TextField from "@mui/material/TextField";
const PriceInput = ({ label }) => {
  return (
    <TextField
      margin="dense"
      label={label}
      InputProps={{
        startAdornment: <Dollar />,
      }}
      type="number"
    />
  );
};

export default PriceInput;
